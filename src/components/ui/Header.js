import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo from '../../assets/logo.svg';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import{Link} from 'react-router-dom';


// styled components section 

const Offset = styled('div')(({ theme }) => ({
   ...theme.mixins.toolbar,
   marginBottom:'1.6rem'
  
}));


// customized objects 

const Customization = {
  tab:{
  minwidth:1/4,
  typography:'tab'
},
  button:{
    marginLeft:'1rem',
    marginRight:'1rem',
    textTransform:'none',
    fontFamily:'pacifico',
    borderRadius:'20px',
    color:'white'



  }
  
}



// mui function area
function ElevationScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  // 
  ///
  ///   this is where  header components starts

  //


const Header = (props) => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
        <React.Fragment>
        <ElevationScroll {...props}>
        <AppBar position='fixed' color='primary'>
            <Toolbar disableGutters sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <Box sx={{width: '20rem',display: 'flex'}}>

                <img alt ='company logo' src={logo}></img>
              </Box>
              <Box sx={{display: 'flex', justifyContent:'flex-end'}}>
              <Tabs value={value} onChange={handleChange} textColor='inherit' >

                <Tab label ='Home'       sx={Customization.tab} component={Link} to='/'  ></Tab>
                <Tab label ='Services'   sx={Customization.tab} component={Link} to='/services'  ></Tab>
                <Tab label ='Revolution' sx={Customization.tab} component={Link} to='/revolution'  ></Tab>
                <Tab label ='About Us'   sx={Customization.tab} component={Link} to='/about'  ></Tab>
                <Tab label ='Contact Us' sx={Customization.tab} component={Link} to='/contact'  ></Tab>
              </Tabs>
              <Button variant ='contained' color ='secondary' sx={Customization.button}>
                  Free Estimate
              </Button>
              </Box>
             
             </Toolbar>  
        </AppBar>
        </ElevationScroll>
        
       <Offset></Offset>  {/*// this added because to fix the issue with the 'fixed' app bar */}
       </ React.Fragment>
        
    )
}

export default Header;