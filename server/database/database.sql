CREATE DATABASE blogAPI;

CREATE TABLE blogs(
    blog_id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    blog_content VARCHAR(255),
    author VARCHAR(255)
);