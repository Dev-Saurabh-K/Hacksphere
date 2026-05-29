import React, { useState } from 'react'
import Quizzez from './Quizzez'
import { CloudCog } from 'lucide-react'

const AllQuizz = () => {

const [activeQuiz, setActiveQuiz] = useState(null);

      const quiz = [
  { 
    question: "what i array?",

    id:1

  },
  { 
    question: "what is array of string?",
    id:2

  }
]


  return (
    <div className='bg-zinc-950 h-screen w-[35vw] 
    flex flex-col items-center border border-zinc-800
    rounded-xl
    '>
        <div className='border border-b-zinc-800 w-full h-[15vh] flex 
        items-center flex-col pt-4'>
            <h1 className='text-white text-2xl'>Quiz Topic</h1>

        </div>

        <div className='w-[100%] h-[20px] px-3'>

          {quiz.map((q)=>(

            
                <Quizzez 
                question ={q.question}
                key={q.id}
                id={q.id}
                activeQuiz={activeQuiz}
                setActiveQuiz={setActiveQuiz}
                
                
                />
                // return(

                //     <Quizzez/>
                // )
            
            ))}
            
        </div>
      
    </div>
  )
}

export default AllQuizz
