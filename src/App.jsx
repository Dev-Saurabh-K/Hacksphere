import { Routes, Route } from "react-router-dom";
import './index.css'
import ClassSelection from "./classSelection";
import Login from "./Pages/Authentication/Login";
import Signup from "./Pages/Authentication/Signup";
import Dashboard from "./Pages/Dashboard/page2";
import Home from "./Pages/Home/Home";
import Logo from "./Pages/Dashboard/Logo";
import History from "./Pages/History/History";
import Chat from "./Pages/chat/chatLayout";
import StudyNotes from "./Pages/StudyNotes/studyNotes";
import Landing_page from "./Landing_page";

function App() {

  return (
    <>
    <Routes> 

    <Route path="/" element={<Landing_page/>}/>

    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/Logo" element={<Logo/>}/>   
    <Route path="/login" element={<Login/>}/>
    <Route path="/classSelection" element={<ClassSelection/>}/>
    <Route path="/subtopics" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/history" element={<History/>}/>
    <Route path="/chat" element={<Chat/>}/>
    </Routes>
    </>
  )
}

export default App;