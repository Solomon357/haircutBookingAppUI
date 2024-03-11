import { Alert, Box, Snackbar, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { ProgressButton } from "./customstyles/Button.styles";
import { useState } from "react";
import ThumbsUpImg from "../images/thumbs_up.png"
import { useNavigate } from "react-router-dom";

const HaircutConfirm = () => {
  const { form, canSubmit } = useFormContext();
  const [errorToast, setErrorToast] = useState(false);
  const navigate = useNavigate();

  const styles = {
    submit: {
      display: !canSubmit ? "none" : "block",
      width: "80%"
    }
  }

  //capitilised for display purposes
  let name = form.haircutBookingName;
  let bookingName = name.charAt(0).toUpperCase() + name.slice(1)  

  const handleClose = () => {
    setErrorToast(false)
  };

  //tester submit function
  const handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify(form))
    navigate('/', {state: true});
  }

  // proper handleSubmit function here
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   fetch("http://localhost:8080/submitpost", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(form),
  //   })
  //   .then((response) => {
  //     console.log("response status:", response.status)
  //     console.log("Success!")
  //     navigate('/', {state: true})
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error)
  //     setErrorToast(true)
  //   });
  // };
  
  return (
    <Box sx={{ mt:"40px", maxWidth:"500px", width:"100%"}}>

      <Stack direction={"column"} display={"flex"} alignItems={"center"} spacing={4}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Box
            component={"img"} 
            sx={{
              width:"100%",
              height:"100%",
              maxWidth:"200px", 
              maxHeight:"200px"  
            }}
            src={ThumbsUpImg}
            alt={"cannot be displayed"} 
          />

          <Typography variant="h4">Thanks {bookingName}!</Typography>
        </Box>
        <Typography textAlign={"center"}>Please make sure the details in the cart are correct before confirming your booking!</Typography>

        <ProgressButton
          sx={styles.submit}
          variant="contained"
          type="submit"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          <Typography fontWeight={"medium"}>Book Haircut</Typography>
        </ProgressButton>

        <Snackbar open={errorToast} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" variant="filled">
            <Typography>Something went wrong! Please try again later</Typography>
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
}
 
export default HaircutConfirm;