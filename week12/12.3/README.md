Basic commands

docker run
docker ps

MONGO:
docker run -d -p 27017:27017 mongo

POSTGRES:
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres

connection string: postgresql://postgres:mysecretpassword@localhost:5432postgres
