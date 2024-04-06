import React, { useEffect, useState } from 'react'


//styles
import "./LandingPage.css";

// images
import Landing_Image from "../../assets/images/landing_image.png";

// Toast
import ToastMsgPopup from "../../Components/ToastMsgPopup";


// MUI
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import GoogleIcon from "@mui/icons-material/Google";



// G-Auth
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signOut,
  } from "firebase/auth";
  import { firebaseApp } from "../../firebase.js";

  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

const LandingPage = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
    const [toastMessageProps, setToastMessageProps] = useState({
      message: "This is a message",
      severity: "info",
      isOpen: false,
      duration: 6000,
    });

    const handleLogout = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            // clear local storage
            localStorage.removeItem("userDetails");
            setIsUserLoggedIn(false);
            setUserDetails(null);
            // setToastMessageProps({
            //   message: "Logged out successfully",
            //   severity: "success",
            //   isOpen: true,
            //   duration: 6000,
            // });
            console.log("signed out");
            navigate("/");
    
          })
          .catch((error) => {
            // An error happened.
            console.log("error signing out");
          });
      };

    const handleSignIn = () => {
        signInWithRedirect(auth, provider);
      };

      async function validateLoginSession(user) {

        if (user && validateSchoolMail(user.email)) {
          try {
            const response = await api.loginAuth({
              email: user.email,
              fullname: user.displayName,
              profilePic: user.photoURL,
            });
          } catch (error) {
            console.log(error);
            setIsUserLoggedIn(false);
            setUserDetails(null);
            setToastMessageProps({
              message: "Something went wrong. Please try again",
              severity: "error",
              isOpen: true,
              duration: 7000,
            });
          }
    
          // set user details
          localStorage.setItem("userDetails", JSON.stringify(user));
          setIsUserLoggedIn(true);
          setUserDetails(user);
          setToastMessageProps({
            message: `Welcome, ${user.displayName}`,
            severity: "success",
            isOpen: true,
          });
        } else {
          if (user && !validateSchoolMail(user.email)) {
            setToastMessageProps({
              message:
                "Invalid email. Please use school email uncc.edu or charlotte.edu",
              severity: "error",
              isOpen: true,
              duration: 7000,
            });
          }
          if (user) {
            handleLogout();
          }
          setIsUserLoggedIn(false);
          setUserDetails(null);
        }
      }
    
      // function to valid student mail
      function validateSchoolMail(email) {
        const domain = email.split("@")[1];
        // Add your domain validation logic here
        return domain === "uncc.edu" || domain === "charlotte.edu";
      }
    
      // on page loads
      useEffect(() => {
        auth.onAuthStateChanged(validateLoginSession);
      }, []);
    
      
  return (
    <Grid container>
        <ToastMsgPopup
                  message={toastMessageProps.message}
                  severity={toastMessageProps.severity}
                  isOpen={toastMessageProps.isOpen}
                  duration={toastMessageProps.duration}
                />
      <Grid item xs={6} className="landing-page-desc-container">
      <h1 className="heading">
        Empowering Connections. Simplifying TA Hiring.
      </h1>
      <h4 className="description">
        UNCC's one-stop platform for students to find their perfect TA match and
        for faculty to efficiently recruit qualified teaching assistants.
      </h4>
      <Container id="login-btn-container">
      <Button variant="contained" startIcon={<GoogleIcon />} onClick={handleSignIn} color="success" style={{
        width:"40%"
      }}>
        Continue as Student
      </Button>
      <Button variant="contained" startIcon={<GoogleIcon />} onClick={handleSignIn} style={{
        backgroundColor:"#ECBB45",
        width:"40%"
      }} >
        Constinue as Faculty
      </Button>
      </Container>
      
        </Grid>
        <Grid item xs={6}>
            <img src={Landing_Image} alt="landing_image" width="100%" height="100%" />
            </Grid>
    </Grid>
        
  );
}

export default LandingPage