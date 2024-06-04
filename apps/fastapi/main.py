import os, sys
import json
import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from starlette.responses import JSONResponse
from datetime import date

app = FastAPI()
api_key = os.getenv('API_KEY')

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {api_key}"
}

# 유저 기본정보
class UserItem(BaseModel) : 
    gender : str
    age : int
    height : int
    weight : int
    goal : str
    
# 유저의 하루 누적 영양소
class DayNutrientItem(BaseModel) : 
    day_calories : int
    day_carbs : int 
    day_protein : int
    day_fat : int
        
class MealInferItem(BaseModel) : 
    image : str 
    food_category : str 
    user_data : UserItem
    
class QustionItem(BaseModel) : 
    chat : str
    user_data : UserItem
    day_nutrient : DayNutrientItem
    
    
@app.get("/")
async def root():
	return "200 : kkp fastAPI server"

@app.post("/meal_infer")
async def meal_infer(item: MealInferItem):
    item = dict(item)
    image = item['image']
    food_category = item['food_category']
    user_data = json.dumps(dict(item['user_data']), ensure_ascii=False)
    text = "Please perform the following tasks based on the image. \
    Task 1 : Please check if there are any foods in the image. Please answer either yes or no. If there is no food, do not perform following task. \
    Task 2 : Identifying and Quantifying Nutritional Values of Foods in the Image.  Summarizing Nutritional Values of All Foods Consumed.  \
    Task 3 : Evaluate the foods on a scale of A to E based on the balance of nutrients. \
    Task 4 : Make a short review depeding on my data : "+user_data+" and suggest other foods. \
    Please answer food in Korean. Answer only in JSON format without explanation. And answer without spaces or line breaks inside the JSON. Use single quotes instead of double quotes inside the JSON and ReviewMessage. \
    This is an example if There are any foods in the image - {'task1': 'yes','task2':{'total':{'calories':883,'carbohydrate':165.8,'protein':30.1,'fat':18}},'task3':'E','task4': {'ReviewMessage': review_message, 'suggestion': food suggestions}} \
    This is an another example if there are no foods in the image - {'task1': 'no'}"

    payload = {
    "model": "gpt-4o",
    "messages": [
        {
        "role": "user",
        "content": [
                {
                    "type": "text",
                    "text": text
                },
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"{image}"
                    }
                }
            ]
        }
    ],
    "max_tokens": 1000
    }

    gpt_response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    
    print(gpt_response.json())
    
    if 'choices' not in gpt_response.json().keys() : 
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")
    if 'message' not in gpt_response.json()["choices"][0].keys() :
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")
    if 'content' not in gpt_response.json()["choices"][0]['message'].keys() : 
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")
        
    gpt_response_content = gpt_response.json()["choices"][0]['message']['content']
    gpt_response_content = gpt_response_content.replace("\'", "\"")
    gpt_response_content = json.loads(gpt_response_content)
    
    is_food = gpt_response_content['task1']
    if is_food == "no" : 
        raise HTTPException(status_code=400, detail="I can't find any food in the image.")
    
    nutrients_total = gpt_response_content['task2']['total']
    rating = gpt_response_content['task3']
    review = gpt_response_content['task4']
    
    response_dict = {}
    response_dict['meal_total'] = nutrients_total
    response_dict['rating'] = rating
    response_dict['review'] = review

    return JSONResponse(response_dict)

@app.post("/chat_infer")
async def chat_infer(item: QustionItem):
    item = dict(item)
    chat = item['chat']
    user_data = json.dumps(dict(item['user_data']), ensure_ascii=False)
    day_nutrient = json.dumps(dict(item['user_data']), ensure_ascii=False)
    text = f'Answer my question in Korean depeding on my user_data : {user_data} and my day_nutrient I took today : {day_nutrient}. My question is : {chat} '

    payload = {
        "model": "gpt-4o",
        "messages": [
            {
            "role": "user",
            "content": [
                {
                "type": "text",
                "text": text
                }
            ]
            }
        ],
        "max_tokens": 500
    }
    gpt_response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
   
    print(gpt_response.json())
    
    if 'choices' not in gpt_response.json().keys() : 
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")
    if 'message' not in gpt_response.json()["choices"][0].keys() :
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")
    if 'content' not in gpt_response.json()["choices"][0]['message'].keys() : 
        raise HTTPException(status_code=500, detail="Server Error. Please check out API KEY")

    gpt_response_content = gpt_response.json()["choices"][0]['message']['content']
     
    response_dict = {}
    response_dict['answer'] = gpt_response_content

    return JSONResponse(response_dict)

#