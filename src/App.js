
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homesidebar from './com/homesidebar/homesidebar.js'
import Home from './com/home/home.js'
import Nav from './com/navbar/nav.js'
function App() {
  return (
    <>
    
    <Router>
        <Nav />
        <Routes>
          <Route
            path="/home"
            element={<Home/>}
          />
          <Route
            path="/interview"
            element={<Homesidebar/>}
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
