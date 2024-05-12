# inference server

## prerequsite

파이썬 가상환경 및 의존성 패키지 설치
``` bash 
## 환경설치
conda create env openai python=3.9
conda activate openai
pip install -r requirements.txt

```

## server 
`--host 0.0.0.0` 옵션은 외부접속 허용을 위함.
``` bash
conda activate 
# uvicorn main:app --port 8504 --host 0.0.0.0
uvicorn main:app --port {PORT 번호} --host 0.0.0.0
```