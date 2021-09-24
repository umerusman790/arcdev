import React from 'react';
import Header from './ui/Header';
import { ThemeProvider } from '@mui/material/styles';
import Theme from './ui/CustomTheme';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <ThemeProvider theme={Theme}> 
     <BrowserRouter>
     <Header />
    
     <Switch>
       <Route exact path='/' component={()=> <div>home</div>}></Route>
       <Route exact path='/services' component={()=> <div>Services</div>}></Route>
       <Route exact path='/customsoft' component={()=> <div>Custom Software</div>}></Route>
       <Route exact path='/mobileapp' component={()=> <div>Mobile App</div>}></Route>
       <Route exact path='/revolution' component={()=> <div>Revolution</div>}></Route>
       <Route exact path='/contact' component={()=> <div>Contact</div>}></Route>
       <Route exact path='/about' component={()=> <div>About</div>}></Route>
       <Route exact path='/estimate' component={()=> <div>Contact</div>}></Route>
     </Switch>
    
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;
