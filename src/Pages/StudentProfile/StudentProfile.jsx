import React, { useEffect, useState } from "react";
import Box from "@mui/system/Box";
import Container from "@mui/material/Container";
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
import studentImage from "../../assets/images/student.png";

import "./StudentProfile.css";
import api from "../../api";



function StudentProfile() {
  // const [taExp, setTaExp] = useState([]);
  // const handleAddTAExp = () => {};


  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    major: "",
    degree: "",
    courses: [],
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      name: formData.name,
      email: formData.email,
      major: formData.major,
      degree: formData.degree,
      courses: formData.courses
    }
    const response = await api.studentProfile(user);
    if(response){
        // onsucess redirect
        const baseUrl = window.location.origin;
        window.location.href = baseUrl + "/student";
    }
  }

  useEffect(() => {
  
    const getCourses = async () => {
      const courses = await api.getCourses();
      setCourses(courses);
    };
    getCourses();

    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if(userDetails){
        setFormData({
            ...formData,  
          name: userDetails.displayName,
            email: userDetails.email,
            
        })
    }

  },[])
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
          {/* <FormControl sx={{ my: 3, display: "block" }}>
            <Box>
              <Typography variant="h6" component="h6">
                Previous TA Experience
              </Typography>
              <Button
                variant="contained"
                color="success"
                onClick={handleAddTAExp}
              >
                Add
              </Button>
            </Box>
          </FormControl> */}
          <Button variant="contained" sx={{ width: "100%" }} onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
      <div className="student-profile-img-container">
        <img
          src={studentImage}
          alt="student image"
          width="100%"
          height="100%"
        />
        </div>
    </div>
  );
}

export default StudentProfile;
