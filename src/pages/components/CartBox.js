import { Box, Divider, Stack, Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ProgressButton } from "../customstyles/Button.styles";

const CartBox = () => {
  const { page, setPage, canSubmit, form, disableNext } = useFormContext();
  //trying rendering based on mui breakpoints
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('md'))

  const styles = {
    cartcontainer: {
      position:{xs:"sticky", md:"fixed"},
      top:{ md:"150px"},
      bottom:{ xs: "0" },
      right:{ md:"8%" },
      height: "fit-content",
      width:{xs:"100%", md: "400px"},
      zIndex: 3, // so it can appear over everything else once small
      backgroundColor: "#231f20"
    },

    cartcontent: {
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "center",
      border: {md: "1px solid white"},
      borderTop: {xs: "1px solid white"},
      borderBottom: {xs: "1px solid white"},
      borderRadius: {xs: "0", md: "10px"}, 
      height:"fit-content", 
      padding: "10px"
    },
    continue : {
      display: canSubmit ? "none" : "block",
      width: {xs: "fit-content", md:"100%"}, 
      margin: "2% auto", 
    },
    divide:{
      borderColor:"antiquewhite"
    }
  }

  const handleNext = () => {
    setPage(next => next + 1)
  }


  let haircutArr = form.haircutType ? form.haircutType.split(",") : ["Select a Service", ""];
  let barberArr = page >= 2 && form.barberInfo ? form.barberInfo.split(",") : ["", ""];

  //capitilised for display purposes
  let name = form.haircutBookingName;
  let bookingName = page > 1 && name 
    ? " for "+ name.charAt(0).toUpperCase() + name.slice(1)  
    : ""
  ;

  const smallCart = (
    <Box sx={styles.cartcontent}>
      <Stack direction={"row"} justifyContent={"space-between"}>

        <Stack direction={"column"}>
          <Typography fontWeight={"bold"}> £{form.total}</Typography>
          <Typography color={"#faa749"}>{haircutArr[0]} &bull; {haircutArr[1]}</Typography>
        </Stack>

        <Box>
          <ProgressButton
            sx={styles.continue}
            variant="contained"
            type="button"
            onClick={handleNext}
            disabled={disableNext}
            //disableRipple
          >
           <Typography>Continue</Typography>  
          </ProgressButton>
        </Box>
      </Stack>
    </Box>
  )


  const bigCart = (
    <Box sx={styles.cartcontent}>

      <Typography variant="h5" alignSelf={"center"} marginBottom={"10px"} >Cart</Typography>

      <Divider variant='middle' sx={styles.divide}/>

      <Stack direction={"column"} gap={"2px"} marginY={"20px"}>
        { form.bookingDate && page >= 3
          ? <Stack direction={"row"} gap={"10px"}> 
              <CalendarTodayIcon /> 
              <Typography>{form.bookingDate}</Typography>
            </Stack>
          : ""
        }

        { form.bookingTime && page >= 3 
          ? <Stack direction={"row"} gap={"10px"}> 
              <ScheduleIcon /> 
              <Typography>{form.bookingTime}</Typography>
            </Stack>
          : ""
        }
      </Stack>

      <Stack direction={"row"} justifyContent={"space-between"} marginY={"20px"}>
        <Stack direction={"column"}>
          <Typography>{haircutArr[0] + bookingName}</Typography>
          <Typography>{haircutArr[1] + (barberArr[0] ? " with "+ barberArr[0] : "")}</Typography>
        </Stack>
        <Typography>£{form.total}</Typography>
      </Stack>

      <Box height={"70px"}></Box>

      <Divider variant='middle' sx={styles.divide}/>

      <Stack direction={"row"} justifyContent={"space-between"}  marginY={"15px"}>
        <Typography sx={{fontWeight: "bold"}}>Total</Typography>
        <Typography sx={{fontWeight: "bold"}}>£{form.total}</Typography>
      </Stack>

      <Box>
        <ProgressButton
          sx={styles.continue}
          variant="contained"
          type="button"
          onClick={handleNext}
          disabled={disableNext}
        >
          <Typography fontWeight={"medium"}>Continue</Typography> 
        </ProgressButton> 
      </Box>
    </Box>         
  )

  return (
    <Box sx={styles.cartcontainer}>
      {small ? smallCart : bigCart}
    </Box>
  );
}
 
export default CartBox;