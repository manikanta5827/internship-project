const { pool } = require('../config/db');

const getAllTasks = async () => {
  const result = await pool.query('SELECT * FROM tasks ORDER BY id ASC');
  return result.rows;
};

const getTaskById = async (id) => {
  const result = await pool.query('SELECT * FROM tasks WHERE id = $1', [id]);
  return result.rows[0];
};

const createTask = async (title, description, due_date, category) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description, due_date, category, completed) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [title, description, due_date, category, false]
  );
  return result.rows[0];
};

const updateTask = async (id, title, description, due_date, category) => {
  const result = await pool.query(
    'UPDATE tasks SET title = $1, description = $2, due_date = $3, category = $4 WHERE id = $5 RETURNING *',
    [title, description, due_date, category, id]
  );
  return result.rows[0];
};

const markTaskAsCompleted = async (id) => {
  const result = await pool.query(
    'UPDATE tasks SET completed = $1 WHERE id = $2 AND completed = $3 RETURNING *',
    [true, id, false]
  );
  return result.rows[0];
};

const deleteTask = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
  return result.rowCount;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  markTaskAsCompleted,
  deleteTask,
};
