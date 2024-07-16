import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Nav from './Components/nav/nav/nav';

function App() {
  
  
  
 

  return (
    <>
      <Router>
       <Nav /> 
        <Routes>
          <Route
            path="/home"
            element={''}
          />
          <Route
            path="/interview"
            element={''}
          />
          <Route
            path="/resume"
            element={""}
          />
          <Route
            path="/projects"
            element={""}
          />
          <Route
            path="/contact"
            element={""}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
