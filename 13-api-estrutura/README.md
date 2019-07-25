docker run \
    --name postgres \
    -e POSTGRES_USER=supersonicgabs \
    -e POSTGRES_PASSWORD=bob@,fett \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash    

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

# ------ Comandos acima em apenas uma linha
docker run --name postgres -e POSTGRES_USER=supersonicgabs -e POSTGRES_PASSWORD=bob@,fett -e POSTGRES_DB=heroes -p 5432:5432 -d postgres

docker run --name adminer -p 8080:8080 --link postgres:postgres -d adminer    

# ------ Inicializando esse docker
docker container start postgres
docker start -i 762f7bd54729
servidor: postgres
user: supersonicgabs
pswd: (classica)
base de dados: heroes

caminho: http://192.168.99.100:8080

## ---- MONGODB
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=senhaadmin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p senhaadmin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'supersonicgabs', pwd: 'minhasenhasecreta', roles: [{role: 'readWrite', db: 'herois'}]})"

# ------ Inicializando esse docker
docker container start mongoclient
docker start -i 7f2f85a34942 //segundo comando
user: admin supersonicgabs
pswd: senhadmin minhasenhasecreta

docker start $(docker ps -a -q --filter "status=exited") //primeiro comando
docker exec -it 7f2f85a34942 /bin/bash

docker start mongodb //esse funciona

caminho: http://192.168.99.100:3000

docker run mongo

31/05/2019
- fazer o login no docker
- docker start $(docker ps -a -q --filter "status=exited")
- docker exec -it mongodb /bin/bash

heroku config:set PM2_PUBLIC_KEY=pcblvpp841puwrk PM2_SECRET_KEY=90ctevg1tloqifh