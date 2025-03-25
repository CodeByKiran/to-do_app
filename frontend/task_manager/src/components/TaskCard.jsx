import { Card, CardContent, Typography, IconButton } from '@mui/material';
import { Edit, Delete, CheckCircleOutline, RadioButtonUnchecked } from '@mui/icons-material';

const TaskCard = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <Card sx={{ margin: '1rem', padding: '1rem' }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="h5" sx={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">{task.description}</Typography>
        </div>
        
        <div>
          <IconButton 
            color={task.completed ? 'success' : 'default'} 
            onClick={() => onToggle(task._id)}
            aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
            size="large"
          >
            {task.completed ? <CheckCircleOutline /> : <RadioButtonUnchecked />}
          </IconButton>

          <IconButton color="primary" onClick={() => onEdit(task)} aria-label="Edit task" size="large">
            <Edit />
          </IconButton>

          <IconButton color="error" onClick={() => onDelete(task._id)} aria-label="Delete task" size="large">
            <Delete />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
