import { useState, useEffect } from 'react';
import { Container, Typography, Button, CircularProgress, Alert } from '@mui/material';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';
import { getTasks, createTask, updateTask, deleteTask } from '../services/api';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // 🔥 Function to fetch tasks
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await getTasks();
      console.log('Fetched Tasks:', response.data);  // ✅ Debugging log
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
      setError('Failed to load tasks.');
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Handle opening the form
  const handleAdd = () => {
    setCurrentTask(null);
    setOpen(true);
  };

  // 🔥 Handle saving a task (Create/Update)
  const handleSave = async (task) => {
    try {
      if (currentTask) {
        // ✅ Update existing task
        await updateTask(currentTask._id, task);
      } else {
        // ✅ Create a new task
        await createTask(task);
      }
      fetchTasks();
    } catch (error) {
      console.error('Error saving task:', error);
    } finally {
      setOpen(false);
    }
  };

  // 🔥 Handle deleting a task
  const handleDelete = async (id) => {
    try {
      await deleteTask(id);
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // 🔥 Handle toggling task completion
  const handleToggle = async (id) => {
    const task = tasks.find((t) => t._id === id);
    if (!task) return;

    try {
      await updateTask(id, { completed: !task.completed });
      fetchTasks();
    } catch (error) {
      console.error('Error toggling task:', error);
    }
  };

  // 🔥 Handle editing a task
  const handleEdit = (task) => {
    setCurrentTask(task);
    setOpen(true);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>Task Manager</Typography>

      <Button variant="contained" color="primary" onClick={handleAdd} sx={{ mb: 2 }}>
        Add Task
      </Button>

      {/* ✅ Loading state */}
      {loading && <CircularProgress />}

      {/* ✅ Error display */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* ✅ Display tasks */}
      {tasks && tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onToggle={handleToggle}
          />
        ))
      ) : (
        !loading && <Typography>No tasks found.</Typography>
      )}

      {/* ✅ Task Form */}
      <TaskForm
        open={open}
        handleClose={() => setOpen(false)}
        onSave={handleSave}
        task={currentTask}
      />
    </Container>
  );
};

export default Home;
