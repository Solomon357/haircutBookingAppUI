import { Box, Step, StepLabel, Stepper, useMediaQuery, useTheme } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { useMemo } from "react";

const FormProgress = () => {
  const { page, title } = useFormContext();
  const theme = useTheme();
  const small = useMediaQuery(theme.breakpoints.down('sm')) 

  //useMemo so that progress bar will only re-render once 
  //page or title dependecies are changed
  return useMemo(() => {
    const styles = {
      steppercontainer: {
        minWidth: '100%', 
        marginY: "20px"
      },
      stepperstyle: {

        '& .MuiStepLabel-label':{
          color: "antiquewhite",
          
          '&.Mui-active':{
            color: '#faa749'
          },
          '&.Mui-completed':{
            color: '#faa749'
          }
        },

        '& .MuiSvgIcon-root': {
          '&.Mui-active':{
            color: '#faa749'
          },
          '&.Mui-completed':{
            color: '#faa749'
          },  
        },

        '& .MuiStepConnector-root':{
          '&.Mui-active':{
            border: '1px solid #faa749'
          },

          '&.Mui-completed':{
            border: '1px solid #faa749'
          }
        }
      }
    }

    const smallStepper = (
      <Stepper activeStep={page} alternativeLabel sx={styles.stepperstyle}>
        {Object.keys(title).map((label) => (
          <Step 
            key={label+1} 
            >
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    )

    const bigStepper = (
      <Stepper activeStep={page} alternativeLabel sx={styles.stepperstyle}>
        {Object.keys(title).map((label) => (
          <Step 
            key={label+1} 
            >
            <StepLabel>{title[label]}</StepLabel>
          </Step>
        ))}
      </Stepper>
    )

    const content = (
      <Box sx={styles.steppercontainer}>
        {small ? smallStepper : bigStepper}
      </Box>
    )

    return content;
    
  },[page, title, small])
}
  
export default FormProgress;