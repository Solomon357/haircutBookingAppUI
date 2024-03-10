import { Box, CircularProgress, FormControl, FormLabel, Radio, RadioGroup, Stack, Typography } from "@mui/material";
import useFormContext from "../customhooks/useFormContext";
import { ReactComponent as CheckedIcon } from "../images/filled_checked_icon.svg"
import { CustomControlLabel } from "./customstyles/CustomRadio.styles";
import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import { useFetch } from "../customhooks/useFetch";
import { useNavigate } from "react-router-dom";

const HaircutType = () => {
  const { form, handleChange } = useFormContext();
  const { allOptions, isLoading, error } = useFetch(`http://localhost:8080/allHaircutInfo`)
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const navigate = useNavigate();

  const styles = {
    formlabel: {
      color: "antiquewhite",
      "&.Mui-focused": {
        color:"#faa749"
      }
    }
  }

  useEffect(() => {
    // error handling needs to be in useEffect if im navigating so that another component
    // doesn't get updated while this component is rendering 
    if(error){
      navigate("/error")
    }

    //if there are no keys in options then theres no search results
    if (Object.keys(allOptions).length > 0){
      setFilteredOptions(allOptions)
    }
  }, [allOptions, navigate, error])


  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchQuery(searchTerm)

    const filteredItems = allOptions.filter((options) =>
      options.value.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredOptions(filteredItems)
  }

  const haircutInputs = (
    <FormControl sx={{ width:"85%", zIndex:"0" }}>
          
      <FormLabel id="haircut-radio-buttons" sx={styles.formlabel}>Select a Haircut</FormLabel>
      
      <RadioGroup
        aria-labelledby="haircut-radio-buttons"
        name="haircutType"
        value={allOptions.value} 
        onChange = {handleChange}
      >
        {filteredOptions && 
          filteredOptions.map((haircuts) => {
          let haircutArr = haircuts.value.split(","); 
          return(
            <CustomControlLabel
              labelPlacement="start"
              key={haircuts.id} 
              checked={form.haircutType === haircuts.value} 
              value={haircuts.value} 
              control={<Radio checkedIcon={<CheckedIcon width={"25px"}/>} />} 
              label= {
                <Stack direction={"column"}>
                  <Typography>{haircutArr[0]}</Typography>
                  <Typography sx={{color: '#898989'}}>{haircutArr[1]}</Typography>
                  <Typography>from £{haircutArr[2]}</Typography>
                </Stack>
              } 
            />
          )
        })}

      </RadioGroup>
    </FormControl>
  )

  const content = (
    <>
      <SearchBar 
        searchInput={searchQuery} 
        handleSearch={handleSearchChange}
      />
      {isLoading && <Box color={"#faa749"}><CircularProgress color="inherit"/></Box>}

      {!isLoading && !error && filteredOptions.length === 0 
        ? <Typography>No matches from search!! please type something else</Typography> // make this look better later
        : 
         haircutInputs
      }
    </>
  );

  return content;
}
 
export default HaircutType;