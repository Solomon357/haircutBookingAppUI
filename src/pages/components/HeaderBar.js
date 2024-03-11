import { AppBar, Container, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import { ReactComponent as SciccorIcon } from "../../images/sciccor_icon.svg" 
import HomeIcon from '@mui/icons-material/Home';
import useFormContext from "../../customhooks/useFormContext";
import { useMemo } from "react";

const HeaderBar = () => {
  const { page, title } = useFormContext();
  
  return useMemo(()=> {
    const styles = {
      appbar: {
        position: "sticky",
        top: "0", 
        backgroundColor: "#231f20",
        width: "100%",
        height:"64px"
      },

      headertitle : {
        fontWeight: "bold",
        fontSize: { sm: "2rem", md:"2.5rem" },
        marginLeft: "5px"
      },
      brandtitle : {
        display: { xs: "none", sm: "block" },
        fontSize: { sm: "1rem", md:"1.3rem"}
      }
    }

    return (
      <AppBar 
        elevation={2}
        className='header-content'
        component={"header"} 
        sx={styles.appbar}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{justifyContent:"space-between"}}
          >
            <Stack direction="row" alignItems={"center"} >
              
              <SciccorIcon height={"40px"} width={"40px"}/>

              <Typography sx={styles.brandtitle} marginLeft={"10px"}>
                <Typography component={"span"} sx={styles.brandtitle} fontWeight={"medium"}>BARBER</Typography> SHOP 
              </Typography>

            </Stack> 

            <Typography sx={styles.headertitle} noWrap>
                {title[page]}
            </Typography>

            <IconButton href='/' size='large' sx={{color: '#faa749'}}>
              <HomeIcon />
            </IconButton>  

          </Toolbar>
        </Container>
      </AppBar>  
    );
  }, [page, title])
}
 
export default HeaderBar;