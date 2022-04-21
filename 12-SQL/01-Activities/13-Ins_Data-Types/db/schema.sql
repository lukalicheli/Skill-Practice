DROP DATABASE IF EXISTS course_db;
CREATE DATABASE course_db;

USE course_db;

CREATE TABLE courses (
  -- use int when for only positive/negative integers (no decimals)
  id INT NOT NULL,
  -- use VARCHAR for smaller text
  course_title VARCHAR(30) NOT NULL,
  -- use TEXT for medium amounts of text
  course_description TEXT NOT NULL,
  -- use BOOLEAN for true/false
  active BOOLEAN NOT NULL,
  -- use DATETIME to store timestamps with the date and time
  date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);
