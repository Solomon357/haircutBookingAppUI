import { Box, Stack, Typography } from "@mui/material";
import { MainButton } from "./customstyles/Button.styles";
import ErrorIcon from "../images/error_icon.png"

const ErrorPage = () => {

  const styles = {
    main: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#231f20",
      color: "antiquewhite", 
    },
    content:{
      width:"fit-content",
      height: "fit-content",
      alignItems:"center",
      direction: "column",
    },
    image: {
      width: "100%",
      maxWidth: "350px",
      height: "100%",
      maxHeight:"350px",
    }
  }
  
  return (
    <Box sx={styles.main}>

      <Stack sx={styles.content} direction={"column"} spacing={"10px"}>
        <Typography fontWeight={"bold"} variant="h2"> Oh no...</Typography>

        <Box
          component={"img"}
          sx={styles.image}
          src={ErrorIcon}
          alt="ErrorIcon" 
        />
        
        <Typography fontWeight={"medium"} variant="h4"> Somethings gone wrong! </Typography>
          
        <Typography>Click the button below to return to safety</Typography>               

        <MainButton href="/">
          <Typography>Go Home</Typography>
        </MainButton>

      </Stack>

    </Box>
  );
}
 
export default ErrorPage;