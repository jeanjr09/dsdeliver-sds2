import Home from "./Home";
import Orders from "./Orders";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";

function Routess() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/Orders" element={<Orders/>} />
            </Routes>
            <Routes>
            <Route path="/home" element={<Home/>} />
            </Routes>

        </Router>

        
    )
}

export default Routess;