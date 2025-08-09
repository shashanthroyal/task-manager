const express = require('express');
const Task = require('../models/taskModel');
const router = express.Router();


router.get('/', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});


router.post('/', async (req, res) => {
  const task = new Task({ title: req.body.title });
  await task.save();
  res.json(task);
});


router.put('/:id', async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.completed = !task.completed;
  await task.save();
  res.json(task);
});


router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
