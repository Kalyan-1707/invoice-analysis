import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
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
  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {applications.map((application) => (
        <Card
          variant="outlined"
          key={application.id}
          sx={{
            my: 1,
            width: "100%",
            p: 2,
          }}
        >
          <CardContent>
            <Typography variant="h5" component="h5">
              {application.course}
            </Typography>
            <Typography variant="h6" component="h6" color="text.secondary">
              {application.professor}
            </Typography>
            <Divider />
            <Typography variant="h6" component="h6" color="text.secondary">
              {application.nomerOfVacancies} open positions.
            </Typography>
            <Typography variant="h6" component="h6">
              {application.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="success">
              Apply
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}

export default Applcations;
