/* Database Schema*/
CREATE DATABASE midwest_form;

CREATE TABLE form(
    form_id SERIAL PRIMARY KEY,
    fname VARCHAR(255) NOT NULL,
    lname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message VARCHAR(1000) NOT NULL
);

CREATE TABLE ipsum (
    ipsum_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(1000)
);
