import React from 'react'
import { ChevronRight,CircleCheckBig,LockKeyhole } from 'lucide-react';
import { useState } from 'react';

const Quizzez = ({question, id, activeQuiz, setActiveQuiz}) => {



  return (
    <button
    onClick={()=>{setActiveQuiz(id)}}
    
    
    className={`h-[65px]
     w-full my-3 rounded-md
     flex flex-row items-center p-1 border 
      justify-between cursor-pointer

      ${activeQuiz === id
        ? 'bg-slate-900 border-orange-400  '
        :' bg-[#0f172a]  border-green-400 '
      }
     `}>

        
        <div className='flex items-center truncate'>

            <span className=' flex flex-col items-center  shrink-0
            justify-center text-emerald-300 bg-emerald-900 h-[35px] w-[35px] rounded-full'>{id}</span>
        <h2 className='ml-2 truncate text-[14px] text-zinc-400 lg:text-[16px]'>{question}</h2>
        </div>

        <span className='mr-1 lg:mr-4 text-zinc-200'>
            <ChevronRight/>
            {/* <CircleCheckBig/> */}
            {/* <LockKeyhole size={18}/> */}
        </span>
        
    </button>
  )
}

export default Quizzez
