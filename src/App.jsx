import { Routes, Route } from "react-router-dom";
import './index.css'
import Dashboard from "./dashboard";
import QuizPage from "./Pages/quiz/QuizPage";

function App() {

  return (
    <>
    {/* <Dashboard/>
    <Routes> 
    <Route path="/" element={<Dashboard/>}/>
    </Routes> */}

    <QuizPage/>
    </>
  )
}

export default App;