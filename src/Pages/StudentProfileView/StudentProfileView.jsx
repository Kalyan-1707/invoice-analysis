import React, { useEffect, useState } from 'react'

import { useParams } from "react-router-dom";
//styles

import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import { FormControl, InputLabel } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import AbcIcon from "@mui/icons-material/Abc";
import EmailIcon from "@mui/icons-material/Email";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";

import './StudentProfileView.css'

const StudentProfileView = () => {

    const { id } = useParams();

    useEffect(() => {
        console.log(id)  
    },[])


    const[courses, setCourses] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        major: "",
        degree: "",
        courses: [],
    })

  return (
    <div id="student-profile-page-container">
    <div className="student-profile-form-container">
        <Typography variant="h4" align="center" component="h4">
          Create your profile
        </Typography>
        <form>
          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="name">Name</InputLabel>
            <OutlinedInput
            disabled
              sx={{ width: "100%" }}
              type="text"
              label="Name"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <AbcIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="email">Email</InputLabel>
            <OutlinedInput
              disabled
              sx={{ width: "100%" }}
              type="email"
              label="email"
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="major">Major</InputLabel>
            <OutlinedInput
            disabled
              sx={{ width: "100%" }}
              type="text"
              label="Major"
              id="major"
              value={formData.major}
              onChange={(e) => setFormData({...formData, major: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <AutoStoriesIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="degree">Degree</InputLabel>
            <OutlinedInput
            disabled
              sx={{ width: "100%" }}
              type="text"
              label="Degree"
              id="degree"
              value={formData.degree}
              onChange={(e) => setFormData({...formData, degree: e.target.value})}
              endAdornment={
                <InputAdornment position="end">
                  <SchoolIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ my: 3, display: "block", width: "100%" }}>
            <Autocomplete
            disabled
              multiple
              id="tags-outlined"
              options={courses}
              getOptionLabel={(option) => option.title}
              value={formData.courses}
              onChange={(event, value) => setFormData({...formData, courses: value})}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Courses"
                  placeholder="Courses"
                />
              )}
            />
          </FormControl>
          
        </form>
      </div>
    <div className="student-profile-img-container">
      
    <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      </div>
  </div>
  )
}

export default StudentProfileView