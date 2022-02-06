import React, { useEffect, useState } from 'react'
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';


const useStyles = makeStyles((theme)=>({
  root: {
    flexGrow: 1,
  },
  menuButton: {
      marginRight:  "20px auto",
  },
  title: {
      flexGrow: 1,
  }
}));


export default function Student() {
    const paperStyle = { padding: '150px 100px', width: 800, margin: "20px auto" }
    
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [year_of_study, setYearOfStudy] = useState('')
    const [age, setAge] = useState('')
    const [id, setId] = useState('')
    const [students, setStudents] = useState([])
    const classes = useStyles();

    const handleClick=(e)=>{
        e.preventDefault()
        
        const student= {
            id, 
            name, 
            address, 
            age, 
            year_of_study
        }

        console.log(student)
        fetch("http://localhost:8080/student/add", {method:  "POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(student)
    }).then(response=>{
        console.log("New student added")
        // this.setState(prevState=>({
        //     students: [student, ...prevState.students]
        // }))
        console.log(response.data);
        fetch("http://localhost:8080/student/getAll").then(res=>res.json()).then(result=>{setStudents(result)})
        console.log(this.state.students);
    });
    }

    const handleClickGet=(e)=>{
        e.preventDefault()
        fetch("http://localhost:8080/student/getAll").then(res=>res.json()).then(result=>{setStudents(result)})
    }

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll").then(res=>res.json()).then(result=>{
            setStudents(result)})
    },[]);

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: 'blue' }}><u> Add Student </u></h1>
                <form className={classes.root} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Student Id" variant="outlined" fullWidth
                        value={id} onChange={(e) => setId(e.target.value)} />
                    <span>&nbsp; </span>
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={name} onChange={(e) => setName(e.target.value)} />
                    <span>&nbsp; </span>
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                        value={address} onChange={(e) => setAddress(e.target.value)} />
                    <span>&nbsp; </span>
                    <TextField id="outlined-basic" label="Age" variant="outlined" fullWidth
                        value={age} onChange={(e) => setAge(e.target.value)} />
                    <span>&nbsp; </span>
                    <TextField id="outlined-basic" label="Year of study" variant="outlined" fullWidth
                        value={year_of_study} onChange={(e) => setYearOfStudy(e.target.value)} />
                    <span>&nbsp; </span>
                    <Button variant="contained" color="secondary" onClick={handleClick}>Submit</Button>
                    <Button variant="contained" color="secondary" onClick={handleClickGet}>Get all</Button>
                </form>
            </Paper>
            <h1>Student</h1>
            <Paper elevation={3} style={paperStyle}>
                {students.map(student=>(
                    <Paper elevation={6} style={{margin: "10px", padding: "15px", textAlign:"left"}} key={student.id}>
                        Id: {student.id}<br/>
                        Name: {student.name}<br/>
                        Address: {student.address}<br/>
                        Age: {student.age}<br/>
                        Year_of_study: {student.year_of_study}<br/>
                    </Paper>
                ))}
            </Paper>
        </Container>
    );
}