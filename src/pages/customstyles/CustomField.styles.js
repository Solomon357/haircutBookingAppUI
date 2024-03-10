import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const SearchField = styled(TextField)({
  position:"sticky", 
  top: "64px", 
  alignSelf: "flex-start",
  marginLeft: "2px",
  zIndex: "1",

  "& .MuiOutlinedInput-root": {

    "&:hover fieldset": {
      border: "2px solid antiquewhite"
    },

    "&.Mui-focused fieldset": {
      borderColor: "antiquewhite"
    }
  },
})

export const NameField = styled(TextField)({

  "& input":{
    textTransform: "capitalize",
  },
  
  "& p":{
    color:"antiquewhite"
  },

  "& label":{
    color: "antiquewhite"
  },

  "& label.Mui-focused":{
    color: "orange"
  },

  "& .MuiOutlinedInput-root": {

    color: "antiquewhite",
    
    "& fieldset":{
      borderColor:"antiquewhite",
    },
    
    "&:hover fieldset": {
      border: "2px solid antiquewhite"
    },

    "&.Mui-focused fieldset": {
      borderColor: "#faa749"
    }
  },
})