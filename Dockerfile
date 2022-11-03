FROM golang:latest

WORKDIR /app

COPY ./ /app


WORKDIR /app/pocketbase

RUN go mod download

RUN go build 

ENTRYPOINT ["go", "run", "main.go", "serve", "--dir=/pb_data"]
