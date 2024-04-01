CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- run \dt; to see table has been created or not

INSERT INTO users (username, email, password)
VALUES ('username_here', 'user@example.com', 'user_password');

UPDATE users
SET password = 'new_password'
WHERE email = 'user@example.com';

SELECT * FROM users
WHERE id = 1;