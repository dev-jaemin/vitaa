# MySQL_mukkaebi

## instal
원격접속이 가능한 mysql 서버 설치 (dummy data 생성x)
- docker 및 docker compose 설치
```bash
docker compose up -d
```

## mysql 접근을 위한 환경변수 

``` bash
MYSQL_IP=124.197.159.108    # IP address
MYSQL_PORT=8503             # PORT , container의 3306으로 포트포워딩
MYSQL_ROOT_PASSWORD=9240    #root user pw
MYSQL_DATABASE=mukkaebi     #DB이름
MYSQL_USER=admin            #DB user
MYSQL_PASSWORD=admin        #admin user pw
```
