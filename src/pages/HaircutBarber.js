import { Avatar, Box, CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { BarberControlLabel } from "./customstyles/BarbarInfoRadio.styles";
import { useFetch } from "../customhooks/useFetch";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HaircutBarber = () => {
  const { form, handleChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`http://localhost:8080/allBarberInfo`);
  const navigate = useNavigate();

  const styles = {
    formlabel: {
      color: "antiquewhite",
      "&.Mui-focused": {
        color:"#faa749"
      }
    },
    info: {
      justifyContent: "center",
      alignItems:"center",
      textAlign:"center"
    }
  }

  //find a way to make this chunk of code re-usable later
  useEffect(()=> {
    if(error){
      navigate("/error")
    }
  }, [navigate, error])


  const barberInputs = (
  
    <FormControl sx={{ width:"100%" }}>
        
      <FormLabel id="barber-radio-buttons" sx={styles.formlabel}>Select a Barber</FormLabel>

      <RadioGroup
        row
        name= "barberInfo"
        value= {allOptions.barber} 
        onChange= {handleChange}
      >
        {allOptions.map((barberDetails) => {
          let barberArr = barberDetails.barber.split(","); 

          return(
            <BarberControlLabel 
              labelPlacement="bottom"
              key={barberDetails.id} 
              checked={form.barberInfo === barberDetails.barber} 
              value={barberDetails.barber} 
              control={<Radio sx={{display: "none"}} />} 
              label={
                <Stack direction={"column"} sx={styles.info}>
                  <Avatar sx={{backgroundColor: "#fff0df", color:"#faa749" }}>{barberArr[3]}</Avatar>
                  <Typography>{barberArr[0]}</Typography>
                  <Typography sx={{color: '#898989'}}>{barberArr[1]}</Typography>
                  <Typography>£{(form.haircutPrice + (+barberArr[2]))}</Typography>
                </Stack>
              } 
            />
          )
        })}
      </RadioGroup>
    </FormControl>
  )

  const barberContent = (
    <>
      {isLoading && <Box color={"#faa749"}><CircularProgress color="inherit"/></Box>}

      {!isLoading && !error && allOptions.length === 0 
        ? <Typography>No matches from search!! please type something else</Typography> // make this look better later
        : 
        barberInputs
      }
    </>
  )
  return barberContent;
}
 
export default HaircutBarber;