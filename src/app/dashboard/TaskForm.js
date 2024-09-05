import { useState } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import { analyzeSentiment } from '../../config/sentiment';

export default function TaskForm({ addTask }) {
  const [taskName, setTaskName] = useState('');
  const [status, setStatus] = useState('To-Do');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = async (e) => {
    e.preventDefault();
    const sentiment = await analyzeSentiment(taskName);
    const newTask = {
      name: taskName,
      status,
      dueDate,
      sentimentScore: sentiment ? sentiment.sentiment : 'neutral',
    };
    await addTask(newTask);
    setTaskName('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleAddTask}>
      <TextField label="Task Name" value={taskName} onChange={(e) => setTaskName(e.target.value)} required />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Select value={status} onChange={(e) => setStatus(e.target.value)} displayEmpty>
        <MenuItem value="To-Do">To-Do</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Done">Done</MenuItem>
      </Select>
      <Button type="submit" variant="contained" color="primary">Add Task</Button>
    </form>
  );
}
