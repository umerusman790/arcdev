import { createTheme} from '@mui/material/styles';


const arcBlue = '#0B72B9';
const arcOrange = '#FFBA60';

const theme = createTheme({
    palette:{
        common:{
            blue:`${arcBlue}`,
            orange:`${arcOrange}`,
        },
        primary:{
            main:`${arcBlue}`,
        },
        secondary:{
            main:`${arcOrange}`
        }
    }, /*pallete Object ends here*/

    typography:{
       tab:{
        fontSize:'1rem',
        fontWeight:600,
        fontFamily:'Raleway',
        textTransform:'none',
      
       }
       
    }
});

export default theme;