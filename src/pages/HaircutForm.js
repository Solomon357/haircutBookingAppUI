import { Box } from '@mui/material';
import FormInputs from './FormInputs';
import FormProgress from './components/FormProgress';
import HeaderBar from './components/HeaderBar';
import Footer from './components/Footer';
import CartBox from './components/CartBox';
import BackButton from './components/BackButton';

const HaircutForm = () => {
  const styles = {
    pagebody: {
      position: "relative",
      minHeight: "100vh",
      minWidth: "100%",
      backgroundColor: "#231f20",
      color: "antiquewhite"
    },
    main: {
      minWidth: "100%",
      minHeight: "100%",
      paddingBottom: "5rem", // has to be more than footer height
    },
    forminputs: {
      width: {xs:"100%", md: "50%"},
      minHeight: "35vh", // maybe tweek i dunno yet??
      display:"flex", 
      flexDirection:"column", 
      justifyContent:"center", 
      alignItems:"center" 
    }
  }

  return (
    <Box className='page-body' sx={styles.pagebody} >

      <HeaderBar />
    
      <Box className='form-content' component={"main"} sx={styles.main}>

        <FormProgress />

        <form>
          <Box sx={styles.forminputs}>
            <FormInputs />
          </Box>
 
          <CartBox />

          <BackButton />  
        </form>
      </Box>

      <Footer />
    </Box>
  );
}

export default HaircutForm;