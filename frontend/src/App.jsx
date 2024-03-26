import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
