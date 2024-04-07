import React from 'react'

//styles
import './ProfessorCoursesPage.css'

//MUI
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Padding } from '@mui/icons-material';


const ProfessorCoursesPage = () => {
  return (
    <div className='professor-courses-page-container'>
        
    <Paper elevation={20}
    classes={{
        root: "course-card-root",
    }}
    sx={{
        width:"300px",
        height:"479px",
        borderRadius:"20px",
    }
    } >
        <h2 className='course-name mr-dafoe-regular'>Mobile based application development</h2>
        <div className='action-btns-container'>
        <Button variant="contained" >hire</Button>
        <Button variant="contained" >view</Button>
        <Button variant="contained" >close</Button>
        
        </div>
    </Paper>
    
    </div>
  )
}

export default ProfessorCoursesPage