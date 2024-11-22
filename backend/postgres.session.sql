CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  due_date DATE,
  category VARCHAR(255)
);

select * FROM tasks

INSERT INTO tasks (title, description, completed, due_date, category) 
VALUES
  ('Complete website', 'Finish building the website for the client', FALSE, '2024-12-01', 'Work'),
  ('Buy groceries', 'Pick up groceries including fruits, vegetables, and snacks', FALSE, '2024-11-25', 'Personal'),
  ('Morning workout', 'Run 5 km in the morning and stretch afterward', TRUE, '2024-11-22', 'Health'),
  ('Study for test', 'Review notes for the upcoming exam on Friday', FALSE, '2024-11-28', 'Education'),
  ('Book flight tickets', 'Reserve tickets for the holiday in December', FALSE, '2024-12-05', 'Travel'),
  ('Read new book', 'Start reading the book "Sapiens: A Brief History of Humankind"', FALSE, NULL, 'Leisure'),
  ('Team meeting', 'Discuss the project status with the team', TRUE, '2024-11-20', 'Work'),
  ('Clean garage', 'Organize and clean the garage this weekend', FALSE, '2024-11-30', 'Personal'),
  ('Complete report', 'Finalize the project report for submission', FALSE, '2024-12-03', 'Work'),
  ('Doctor appointment', 'Attend a health check-up appointment at 10 AM', FALSE, '2024-11-23', 'Health');
