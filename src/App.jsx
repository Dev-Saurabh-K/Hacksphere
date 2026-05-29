import { Routes, Route } from "react-router-dom";
import './index.css'
import ClassSelection from "./classSelection";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Dashboard from "./Pages/Dashboard/page2";
import Landing_page from "./Landing_page"

function App() {

  return (
    <>
    <Routes> 
    <Route path="/" element={<Landing_page/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/classSelection" element={<ClassSelection/>}/>
    <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App;