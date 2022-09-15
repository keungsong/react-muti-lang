import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import React from "react";
import './styles/App.css'
import AttractionPage from "./components/attractionPage";



function App() {
  
  return (
    
    <BrowserRouter>
    
    
      
     
      <Routes>
        <Route path="/:lang" element={<AttractionPage/>}>
            
        </Route>
        
       <Route path="/" element={<AttractionPage/>}>
        
       </Route>
      </Routes>
   
 
  </BrowserRouter>
  );
}

export default App;
