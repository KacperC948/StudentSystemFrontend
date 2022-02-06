import * as React from 'react';
import TextField from '@mui/material/TextField';
import {Container, Paper} from '@material-ui/core';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: "20px auto",
    },
    tittle: {
        flexGrow: 1,
    },
}));

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600, margin: "20px auto"}
    const classes = useStyles();
    return (
    <Container>
        <Paper elevation={3} style={paperStyle}>
            <h1>Add Student</h1>
    <form className={classes.root} notValidate autoComplete='off'>
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth />
      <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth />
    </form>
    </Paper>
    </Container>
  );
}