const express = require('express');
const Task = require('../models/task');
const router = express.Router();

// @desc    Get all tasks
// @route   GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// @desc    Create a new task
// @route   POST /api/tasks
router.post('/', async (req, res) => {
  const { title, description, completed } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Title is required' });
  }

  try {
    const newTask = new Task({ title, description, completed });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create task' });
  }
});

// @desc    Update a task by ID
// @route   PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
  const { title, description, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, completed },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update task' });
  }
});

// @desc    Delete a task by ID
// @route   DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete task' });
  }
});

module.exports = router;
