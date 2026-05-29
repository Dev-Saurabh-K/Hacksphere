import React from 'react'
import Questions from './Questions'
import Options from './Options'

const QuizBox = () => {
  return (




    <form action=" 
    
    ">
        <div className='flex flex-col items-center gap-3 mt-8 w-[100%] h-[50vh]'>

            <div className='w-[90%] h-[100%] p-8 px-5 rounded-lg border border-zinc-800'>
                <Questions/>
                {/* <div className='mt-6'>
                <Options/>

                </div> */}

            </div>

            <button type='submit' className='bg-emerald-500 w-[150px] h-10 rounded-md cursor-pointer hover:bg-emerald-600 text-semibold'>View Score</button>

        </div>




    </form>

  )
}

export default QuizBox
