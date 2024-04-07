import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import { FormControl, Button, TextField, FormLabel } from "@mui/material";
import api from "../../api";

// const applications = [
//   {
//     id: "1",
//     course: "ITCS 1111 aaaaaaaaaaa",
//     professor: "hjdjhs",
//     nomerOfVacancies: "2",
//     description:
//       "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
//   },
// ];

function Applcations() {

  const [applications, setApplications] = React.useState([]);


  const [open, setOpen] = React.useState(false);
  const [courseSelected, setCourseSelected] = React.useState({});

  const [coverLetter, setCoverLetter] = React.useState("");

  const handleOpen = (application) => {
    setOpen(true);
    setCourseSelected(application);
  };
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    const semail = userDetails.email;
    const response = await api.applyHiringPost({
      studentEmail: semail,
      courseId: courseSelected.courseId,
      courseName: courseSelected.courseName,
      professorEmail: courseSelected.email,
      description: coverLetter
    });
    if (response) {
    }
  }

  useEffect(() => {

    const getApplications = async () => {
      const response = await api.getHiringPosts();
      setApplications(response);
    };
    getApplications();
  },[])

  return (
    <>
      <Box sx={{ m: 5, mx: "auto" }}>
        {applications.map((application) => (
          //
          <Card key={application.id} sx={{ minWidth: 275, my: 2, p: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 18 }}>
                {application.courseName}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                Professor Name
              </Typography>
              <Divider />
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {application.positionsOpen} open positions.
              </Typography>
              <Typography sx={{ fontSize: 16 }}>
                {application.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                color="success"
                onClick={handleOpen.bind(this, application)}
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
      <Modal keepMounted open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2">
            {courseSelected.courseName}
          </Typography>
          <Typography variant="h6" component="h2" color="text.secondary">
            Professor Name 
          </Typography>
          <form>
            <FormControl sx={{ my: 3, display: "block", width: "100%" }}>
              <FormLabel htmlFor="coverLetter">Cover Letter</FormLabel>
              <TextField
                multiline
                rows={10}
                variant="outlined"
                sx={{ width: "100%" }}
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                // inputProps={{ style: { resize: "vertical" } }}
              />
            </FormControl>
            <Button variant="contained" color="success" sx={{ width: "100%" }} onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}

export default Applcations;
