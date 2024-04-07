import React, { useState } from "react";
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

const coursesList = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
];

function StudentProfile() {
  // const [taExp, setTaExp] = useState([]);
  // const handleAddTAExp = () => {};
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "rgba(255,255,255,0.78)",
          p: 3,
          borderRadius: "10px",
          boxShadow: 3,
          ml: 5,
          pb: 5,
        }}
      >
        <Typography variant="h4" align="center" component="h4">
          Create your profile
        </Typography>
        <form>
          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <OutlinedInput
              sx={{ width: "100%" }}
              type="text"
              label="First Name"
              id="firstName"
              endAdornment={
                <InputAdornment position="end">
                  <AbcIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <OutlinedInput
              sx={{ width: "100%" }}
              type="text"
              label="Last Name"
              id="lastName"
              endAdornment={
                <InputAdornment position="end">
                  <AbcIcon />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl sx={{ my: 3, display: "block" }}>
            <InputLabel htmlFor="email">UNCC Email</InputLabel>
            <OutlinedInput
              sx={{ width: "100%" }}
              type="email"
              label="UNCC Email"
              id="email"
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
              options={coursesList}
              getOptionLabel={(option) => option.title}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Courses done at UNCC"
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
          <Button variant="contained" sx={{ width: "100%" }}>
            Submit
          </Button>
        </form>
      </Container>
      <Container>
        <img
          src={studentImage}
          alt="student image"
          width="100%"
          height="100%"
        />
      </Container>
    </Box>
  );
}

export default StudentProfile;
