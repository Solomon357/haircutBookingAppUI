import { Typography } from "@mui/material";
import useFormContext from "../../customhooks/useFormContext";
import { PrevButton } from "../customstyles/Button.styles";
import { useMemo } from "react";

const BackButton = () => {
  const { setPage, disablePrev } = useFormContext();

  return useMemo(() => {
    
    const styles = {
      goback: {
        marginY:"40px", 
        marginLeft:"3%",
        width: "150px", 
        alignSelf: "flex-start",
      },
    }

    const handlePrev = () => {
      setPage(prev => prev - 1)
    }

    const content = (
      <PrevButton
        sx={styles.goback}
        variant="contained"
        type="button"
        onClick={handlePrev}
        disabled={disablePrev}
      >
        <Typography fontWeight={"medium"}>Go Back</Typography>
      </PrevButton>         
    )
    
    return content;
  }, [setPage, disablePrev])
}
 
export default BackButton;