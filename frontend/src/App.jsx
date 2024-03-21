import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/Home"
          element={
           
               
                  <Landing/>
          
                
       
          }/>
      

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
