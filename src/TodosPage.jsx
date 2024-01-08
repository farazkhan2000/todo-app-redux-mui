import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import { addTodo } from './store/actions/todoActions';

const TodosPage = () => {
  const dispatch = useDispatch()

  const [input, setInput] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setInput('')
    if (input.trim() !== '') { // Check if the input is not empty or contains only spaces
      dispatch(addTodo(input)); // Dispatch the action only if input is not empty
      setInput(''); // Clear the input after dispatching
    } else {
      alert('Todo cannot be empty');
    }
  }

  // getting todos from the store
  const todos = useSelector((todo) => todo.todoReducer);

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
        <form onSubmit={handleSubmit} style={{marginBottom: '18px'}}>
          <TextField fullWidth label="Add Todo" id="AddTodo" name="AddTodo" value={input} onChange={(e) => setInput(e.target.value)} />
          <Button type="submit" variant="contained" endIcon={<AddIcon />} sx={{ margin: "18px 0 14px 0"}}>
            Add Todo
          </Button>
        </form>
        {/* All Added Todos */}
        {todos.map((todo) => {
            return (
              <Grid container spacing={4}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Task 1
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {todo}
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
            )
        })}
      </Paper>
    </>
  );
}

export default TodosPage;