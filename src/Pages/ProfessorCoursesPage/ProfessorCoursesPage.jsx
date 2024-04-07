import React from "react";

//styles
import "./ProfessorCoursesPage.css";

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

const ProfessorCoursesPage = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <div className="professor-courses-page-container">
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
          Mobile based application development
        </h2>
        <div className="action-btns-container">
          <Button variant="contained" onClick={handleOpen}>
            hire
          </Button>
          <Button variant="contained">view</Button>
          <Button variant="contained">close</Button>
        </div>
      </Paper>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            Mobile based application development
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
              />
            </FormControl>
            <FormControl sx={{ my: 3, display: "block", width: "100%" }}>
              <FormLabel htmlFor="description">Description</FormLabel>
              <TextField
                multiline
                rows={10}
                variant="outlined"
                sx={{ width: "100%" }}
                // inputProps={{ style: { resize: "vertical" } }}
              />
            </FormControl>
            <Button variant="contained" color="success" sx={{ width: "100%" }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfessorCoursesPage;
