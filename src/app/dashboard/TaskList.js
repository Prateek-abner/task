import { Card, CardContent, Typography, Grid } from '@mui/material';

export default function TaskList({ tasks }) {
  return (
    <Grid container spacing={3}>
      {tasks.map((task) => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <Card>
            <CardContent>
              <Typography variant="h5">{task.name}</Typography>
              <Typography>Status: {task.status}</Typography>
              <Typography>Due Date: {task.dueDate}</Typography>
              <Typography>Sentiment: {task.sentimentScore}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
