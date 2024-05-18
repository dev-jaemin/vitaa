# inference server

## prerequsite

파이썬 가상환경 및 의존성 패키지 설치

```bash
## 만약 conda가 깔려있지 않다면
brew install conda
vi ~/.zshrc
## export PATH="/opt/homebrew/anaconda3/bin:$PATH" 넣기
source ~/.zshrc
conda init zsh

## 폴더 경로 이동
cd apps/fastapi

## 환경설치
conda create -n openai python=3.9
conda activate openai
pip install -r requirements.txt
```

## server

- `API_KEY` 환경변수 등록이 필요
- `--host 0.0.0.0` 옵션은 외부접속 허용을 위함

```bash
conda activate {python 가상환경}
export API_KEY={API_KEY}
# uvicorn main:app --port 8504 --host 0.0.0.0
uvicorn main:app --port {PORT 번호} --host 0.0.0.0
```
