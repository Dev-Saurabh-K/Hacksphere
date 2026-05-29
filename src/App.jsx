import { Routes, Route } from "react-router-dom";
import './index.css'
import Dashboard from "./dashboard";

function App() {

  return (
    <>
    <Dashboard/>
    <Routes> 
    <Route path="/" element={<Dashboard/>}/>
    </Routes>
    </>
  )
}

export default App;