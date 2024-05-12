docker run --name my-redis -d -p 6379:6379 redis
docker exec -it container_id /bin/bash
root@container_id:/data# redis-cli
SET mykey "Harshil"
GET mykey
DEl mykey

HSET user:100 name "John Doe" email "user@example.com" age "30"
HGET user:100 name
HGET user:100 email

LPUSH user:100 "{problemID: 1, userId:100, lang:cpp, code: 'yo yo'}"
LPUSH user:101 "{problemID: 2, userId:101, lang:cpp, code: 'yo2 yo2'}"

RPOP user
RPOP user
