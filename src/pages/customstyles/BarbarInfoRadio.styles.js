import styled from "@emotion/styled";
import { FormControlLabel, useRadioGroup } from "@mui/material";

const styles = {
  
  customformlabel: {
    color: "antiquewhite",
    border: "2px solid #444343", 
    borderRadius: '15px',
    width:"30%",
    height: "fit-content",
    padding: '5px 5px',
    margin: "5px",
    display: "flex",
    justifyContent:"space-between",
    typography: "Saira Condensed",
    "&:hover": {
      backgroundColor: "#423c3e",
    }
  }
}


const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel sx={styles.customformlabel} {...props} />
  ))(({ checked }) => ({
    //styles of checked component can be played around with here
    "&.MuiFormControlLabel-root": checked && {
      border: "3px solid #faa749", 
    }
  })
);

// Custom BarberControl
export function BarberControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}