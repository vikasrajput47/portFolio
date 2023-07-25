import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import{Home,Education,Projects,Contact,Navbar} from './components'

const App=()=> {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
