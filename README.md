# REST-API NodeJS com Express e MongoDB
> Conteúdo desenvolvido no curso da Alura, como modelo de nivelamento para pós graduação em Software Architecture

## Docker
> docker build -t araujoit/alura-node:1.0.0 .

> docker network create --driver bridge rede-alura-node

> docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=passwd123 --network rede-alura-node -d mongo

> docker run --name alura-node -p 3000:3000 -e MONGODB_URI='mongodb://root:passwd123@mongodb/?retryWrites=true&w=majority' --network rede-alura-node -d araujoit/alura-node:1.0.0

## Deploy no Swarm
 docker stack deploy --compose-file .\docker-compose.yml alura-node

### Referências
- https://cursos.alura.com.br/course/nodejs-api-rest-express-mongodb