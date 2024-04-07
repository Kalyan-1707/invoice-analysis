import React, { useEffect, useState } from "react";

//MUI
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import AbcIcon from "@mui/icons-material/Abc";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import EmailIcon from '@mui/icons-material/Email';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


//styles
import "./ProfessorProfilePage.css";

//images
import ProfessorProfileImage from "../../assets/images/professor_profile.png";
import api from "../../api";



const top100Films = [];
const ProfessorProfilePage = () => {

    const [courses,setCourses]=useState([]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
        courses: [],
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData)
        const response = await api.submitProfessorProfile(formData);

        //onsucess redirect
        if(response){
            
        const baseUrl = window.location.origin;
        window.location.href = baseUrl + '/professor';
        }
    }

    useEffect(() => {

        const getCourses = async () => {
            const courses = await api.getCourses();
            setCourses(courses);
        }
        
        getCourses();

        const userDetails = JSON.parse(localStorage.getItem('userDetails'));
        if(userDetails){
            setFormData({
                name: userDetails.displayName,
                email: userDetails.email,
                department: '',
                courses: [],
            })
        }

    },[]);

  return (
    <div id="professor-profile-page-container">
      <div className="prof-profile-form-container">
        <h2 style={{textAlign:'center'}}>Profile </h2>
        <form id="prof-profile-form">
          
        <FormControl sx={{ m: 1, width: '100%', display:'block' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
          <OutlinedInput
            id="outlined-adornment-name"
            type={'text'}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <AbcIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Name"
            sx={{
              width: '100%',
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%',display:'block' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-email" >Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            type={'text'}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <EmailIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Email"
            sx={{
              width: '100%',
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%',display:'block' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-department">Department</InputLabel>
          <OutlinedInput
            id="outlined-adornment-department"
            type={'text'}
            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <AutoStoriesIcon/>
                </IconButton>
              </InputAdornment>
            }
            label="Department"
            sx={{
              width: '100%',
            }}
          />
        </FormControl>

        <FormControl sx={{ m: 1, width: '100%',display:'block' }} variant="outlined">
        <Autocomplete
        multiple
        id="tags-outlined"
        options={courses}
        getOptionLabel={(option) => option.title}
        filterSelectedOptions
        onChange={(e,value) => setFormData({ ...formData, courses: value })}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select Courses"
            placeholder="Courses"
          />
        )}
      />
        </FormControl>
       
        <Button variant="contained" sx={{ width: "100%" }} onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </div>
      <div className="prof-profile-img-container">
        <img
          src={ProfessorProfileImage}
          className="professor-profile-page"
          alt="professor profile"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default ProfessorProfilePage;


