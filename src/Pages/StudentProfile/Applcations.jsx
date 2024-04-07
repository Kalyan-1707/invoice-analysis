import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";

const applications = [
  {
    id: "1",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "2",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "3",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "4",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "5",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "6",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "7",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "8",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "9",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "10",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "11",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "12",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "13",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
  {
    id: "14",
    course: "ITCS 1111 aaaaaaaaaaa",
    professor: "hjdjhs",
    nomerOfVacancies: "2",
    description:
      "qwertyuioplkjhgfdsa zxcvbnm, asdfghjkl qwertyuiop qwertyuiop qwertyuio, qw ertyhj qwerty",
  },
];

function Applcations() {
  const [open, setOpen] = React.useState(false);
  const [courseSelected, setCourseSelected] = React.useState({});
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
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Box sx={{ m: 5, mx: "auto" }}>
        {applications.map((application) => (
          //
          <Card sx={{ minWidth: 275, my: 2, p: 2 }}>
            <CardContent>
              <Typography sx={{ fontSize: 18 }}>
                {application.course}
              </Typography>
              <Typography sx={{ fontSize: 16 }} color="text.secondary">
                {application.professor}
              </Typography>
              <Divider />
              <Typography sx={{ fontSize: 14 }} color="text.secondary">
                {application.nomerOfVacancies} open positions.
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
            {courseSelected.course}
          </Typography>
          <Typography variant="h6" component="h2">
            {courseSelected.professor}
          </Typography>
          
        </Box>
      </Modal>
    </>
  );
}

export default Applcations;
