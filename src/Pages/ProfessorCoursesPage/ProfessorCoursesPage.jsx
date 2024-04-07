import React, { useEffect, useState } from "react";

//MUI
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Padding } from "@mui/icons-material";
import {
  Modal,
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";


//styles
import "./ProfessorCoursesPage.css";

import api from "../../api.js";

const ProfessorCoursesPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [currentCourse, setCurrentCourse] = useState({});

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    positionsOpen: "",
    description: "",
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const response = await api.postCourseHiring({
      email: userDetails.email,
      courseId: currentCourse.code,
      courseName: currentCourse.title,
      positionsOpen: formData.positionsOpen,
      description: formData.description,
    });
    if (response) {
      const baseUrl = window.location.origin;
      window.location.href = baseUrl + "/professor/view";
    }
  }

  useEffect(() => {
    const getCourses = async () => {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const email = userDetails.email;
      const courses = await api.getProfessorCourses({email});
      
      setCourses(courses.courses);
    };
    getCourses();
  },[])

  return (
    <div className="professor-courses-page-container">
      
      {
        courses?.map((course) => (
            <Paper
        elevation={20}
        classes={{
          root: "course-card-root",
        }}
        sx={{
          width: "300px",
          height: "479px",
          borderRadius: "20px",
        }}
      >
        <h2 className="course-name mr-dafoe-regular">
          {course.title}
        </h2>
        <div className="action-btns-container">
          <Button variant="contained" onClick={() => {
            setCurrentCourse(course)
            handleOpen()
            }}>
            hire
          </Button>
          <Button variant="contained">view</Button>
          <Button variant="contained">close</Button>
        </div>
      </Paper>
        ))
      }
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {currentCourse.title}
          </Typography>
          <form>
            <FormControl
              sx={{
                my: 3,
                display: "flex",
                flexDirection: "row",
                width: "100%",
                alignItems: "center",
              }}
            >
              <FormLabel htmlFor="Vacancies">Vacancies</FormLabel>
              <TextField
                type="number"
                variant="outlined"
                sx={{ ml: 3, width: "100px" }}
                inputProps={{ maxLength: 2 }}
                onChange={(e) => setFormData({...formData, positionsOpen: e.target.value})}
              />
            </FormControl>
            <FormControl sx={{ my: 3, display: "block", width: "100%" }}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <TextField
                multiline
                rows={10}
                variant="outlined"
                sx={{ width: "100%" }}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                // inputProps={{ style: { resize: "vertical" } }}
              />
            </FormControl>
            <Button variant="contained" color="success" sx={{ width: "100%" }}
                onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfessorCoursesPage;
