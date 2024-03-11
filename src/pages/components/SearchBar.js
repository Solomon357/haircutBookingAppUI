import { InputAdornment } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { SearchField } from "../customstyles/CustomField.styles";


const SearchBar = ({ searchInput, handleSearch }) => {

  const styles = {
    searchfield: {
      borderRadius: "40px",
      width: "55px",
      transition: "all 0.5s",
      cursor: "pointer",

      "&.Mui-focused": {
        width: "200px",
        float: "left",
        color: "antiquewhite",
        borderRadius: "4px",
        zIndex: "10",
      }
    }
  }
  
  return (
    <SearchField
      type="input"
      onFocus={() => window.scroll({ top: 0, behavior: 'smooth'})}
      id="input-with-icon-textfield"
      placeholder="Search here..."
      value={searchInput}
      onChange={handleSearch}
      InputProps={{
        sx: { ...styles.searchfield },
        startAdornment: (
          <InputAdornment position="start" disablePointerEvents sx={{paddingLeft: "2px"}} >
            <SearchIcon htmlColor="white" />
          </InputAdornment>
        )
      }}
    />
  );
}
 
export default SearchBar;