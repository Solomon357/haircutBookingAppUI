import { IconButton, Link, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const styles = {
    footer: {
      display:"flex",
      position: "absolute", 
      bottom: "20px",
      justifyContent:"space-around",
      width:"100%",
      alignItems:"center",
    },
    toolbar: {
      justifyContent: "space-between",
      color:"white"
    }
  }

  return (
    <Stack component="footer" direction={"row"} sx={styles.footer} flexWrap={"wrap"}>
      
      <Stack direction={"row"} alignItems={"center"}>
        <IconButton href="mailto:solomonoddy@hotmail.com">
          <EmailIcon htmlColor="antiquewhite"/>
        </IconButton>

        <Link href="mailto:solomonoddy@hotmail.com" color="inherit" underline="hover">
          <Typography >Solomonoddy@hotmail.com</Typography>
        </Link>
      </Stack>
    
      <Stack spacing={"20px"} direction={"row"}>
        <Link color={'#898989'} underline="hover">
          <Typography >Terms & Conditions</Typography>
        </Link>

        <Link color={'#898989'} underline="hover">
          <Typography color={'#898989'}>Privacy Policy</Typography>
        </Link>
      </Stack>
    </Stack>
  );
}
 
export default Footer;