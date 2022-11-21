# nestjs-microservice-redis
[Nestjs microservice](https://docs.nestjs.com/microservices/redis) use the Redis transporter implements the publish/subscribe messaging paradigm and leverages the Pub/Sub feature of Redis.

## Requirements
1. Docker
2. DockerDocker-Compose

## Dependencies
- node:16-alpine3.16 (image)
- nestjs
- @nestjs/microservices
- ioredis

## Features/Modules/Services
- Api gateway
- Customer service
- Book service

## Setup config `.env`
Copy file `.env.example` to `.env`, and<br>
In the Customer and Book service, copy file `.env.prod.example` to `.env.prod`

## Running the Service
```bash
$ docker-compose up -d
```
## Stop the Service
```bash
$ docker-compose down
```

## The endpoint services
    Customer service: http://localhost:3000/customer <br>
    1. GET: http://localhost:3000/customer
    2. GET: http://localhost:3000/customer/{id}
    3. POST: http://localhost:3000/customer
    4. PUT: http://localhost:3000/customer/{id}
    5. DELETE: http://localhost:3000/customer/{id}
    
    Book service: http://localhost:3000/book <br>
    1. GET: http://localhost:3000/book
    2. GET: http://localhost:3000/book/{id}
    3. POST: http://localhost:3000/book
    4. PUT: http://localhost:3000/book/{id}
    5. DELETE: http://localhost:3000/book/{id}


