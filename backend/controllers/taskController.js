const taskModel = require('../models/taskModel');

const getTasks = async (req, res) => {
  const tasks = await taskModel.getAllTasks();
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const { title, description, due_date, category } = req.body;
  if (!title || !description || !due_date || !category)
    return res.status(400).json({ error: 'Missing Fields' });
  const task = await taskModel.createTask(
    title,
    description,
    due_date,
    category
  );
  res.status(201).json(task);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date, category } = req.body;
  if (!id || !title || !description || !due_date || !category)
    return res.status(400).json({ error: 'Missing Fields' });
  const task = await taskModel.updateTask(
    id,
    title,
    description,
    due_date,
    category
  );
  if (!task) return res.status(404).json({ error: 'Task not found' });
  res.status(200).json(task);
};

const markAsCompleted = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Missing ID' });
  const task = await taskModel.markTaskAsCompleted(id);
  if (!task)
    return res
      .status(400)
      .json({ error: 'Task already completed or not found' });
  res.status(200).json(task);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'Missing ID' });
  const result = await taskModel.deleteTask(id);
  if (result === 0) return res.status(404).json({ error: 'Task not found' });
  res.status(204).send();
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  markAsCompleted,
  deleteTask,
};
