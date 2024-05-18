import os, sys
import json
import requests
from fastapi import FastAPI
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
    text = "This meal is "+food_category+". Please perform the following 3 tasks based on the image. \
    Task 1 : Identifying and Quantifying Nutritional Values of Foods in the Image. Analyze up to 5 foods \
    Task 2 : Summarizing Nutritional Values of All Foods Consumed. \
    Task 3 : Evaluate the diet on a scale of A to E based on the balance of nutrients. \
    Task 4 : Make a short review depeding on my data, "+user_data+" \
    Please answer food in Korean. Answer only in JSON format without explanation. And answer without spaces or line breaks inside the JSON. Use single quotes instead of double quotes inside the JSON and ReviewMessage.\
    This is an example. {'task1':[{'떡볶이':{'calories':380,'carbohydrate':86,'protein':10,'fat':4.4}},{'김치':{'calories':34,'carbohydrate':7.1,'protein':2.0,'fat':0.6}},{'콩나물무침':{'calories':45,'carbohydrate':8.6,'protein':3.6,'fat':0.2}},{'부추전':{'calories':174,'carbohydrate':14.2,'protein':5.6,'fat':10.8}},{'잡곡밥':{'calories':210,'carbohydrate':44,'protein':5,'fat':1.5}},{'된장국':{'calories':40,'carbohydrate':5.9,'protein':3.9,'fat':0.5}}],'task2':{'total':{'calories':883,'carbohydrate':165.8,'protein':30.1,'fat':18}},'task3':'E','task4':'This food is not good for you'}\
    "

    payload = {
    "model": "gpt-4-vision-preview",
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
                        "url": f"data:image/jpeg;base64,{image}"
                    }
                }
            ]
        }
    ],
    "max_tokens": 1000
    }

    gpt_response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    gpt_response_content = gpt_response.json()["choices"][0]['message']['content']
    gpt_response_content = gpt_response_content.replace("\'", "\"")
    gpt_response_content = json.loads(gpt_response_content)
    
    print(gpt_response_content)
    nutrients_detail = gpt_response_content['task1']
    nutrients_total = gpt_response_content['task2']['total']
    rating = gpt_response_content['task3']
    review = gpt_response_content['task4']
    
    response_dict = {}
    response_dict['meal_detail'] = nutrients_detail
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
    text = f'Answer my question in Korean {chat} depeding on my user_data : {user_data} and my day_nutrient I took today : {day_nutrient}'

    payload = {
        "model": "gpt-4-vision-preview",
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
        "max_tokens": 200
    }
    gpt_response = requests.post("https://api.openai.com/v1/chat/completions", headers=headers, json=payload)
    gpt_response_content = gpt_response.json()["choices"][0]['message']['content']

    response_dict = {}
    response_dict['answer'] = gpt_response_content

    return JSONResponse(response_dict)

#