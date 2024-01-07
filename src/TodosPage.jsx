import * as React from 'react';
// Material UI Imports
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const TodosPage = () => {
  return (
    <>
      {/* Heading */}
      <Typography variant="h2" component="h1" align="center" fontWeight="bold" sx={{ padding: "35px 0"}}>
        Todo App
      </Typography>

      <Paper
        sx={{
          p: 2,
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        {/* Add Todo Form */}
        <form style={{marginBottom: '18px'}}>
          <TextField fullWidth label="Add Todo" id="AddTodo" name="AddTodo" />
          <Button type="submit" variant="contained" endIcon={<AddIcon />}  sx={{ margin: "18px 0 14px 0"}}>
            Add Todo
          </Button>
        </form>
        {/* All Added Todos */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Task 1
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Make a Todo App
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
            <IconButton aria-label="view">
              <PreviewIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="edit">
              <DeleteIcon />
            </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default TodosPage;