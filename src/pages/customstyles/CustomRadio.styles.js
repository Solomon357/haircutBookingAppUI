import styled from "@emotion/styled";
import { FormControlLabel, useRadioGroup } from "@mui/material";

const styles = {
  
  customformlabel: {
    color: "antiquewhite",
    borderTop: {xs: "none", md:"2px solid #444343"}, 
    borderLeft: {xs: "none", md:"2px solid #444343"},
    borderRight: {xs: "none", md:"2px solid #444343"},
    border: "2px solid #444343",
    borderRadius: '15px',
    width:{ xs:"100%",md:"96%"},
    height: "90px",
    padding: '5px 5px',
    margin: "5px",
    display: "flex",
    justifyContent:"space-between",
    typography: "Saira Condensed",

    "&:hover": {
      backgroundColor: "#423c3e",
    },
    "& .MuiButtonBase-root span":{
      color: "antiquewhite"
    }
  }
}

const StyledFormControlLabel = styled((props) => 
  (<FormControlLabel sx={styles.customformlabel} {...props} />
  ))(({ checked }) => ({
    //styles of the component can be played around with here
    "&.MuiFormControlLabel-root": checked && {
      borderColor:"#faa749"
    }
  })
);

export function CustomControlLabel(props) {
  const radioGroup = useRadioGroup();
  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}