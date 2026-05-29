import React from 'react'
import AllQuiz from './AllQuiz'
import QuizBox from './QuizBox'

const QuizPage = () => {
    return (
        <div className='bg-[#000000] flex h-full w-full  flex flex-row-reverse '>

            {/* <Sidebar />
            <div className='w-full flex flex-col'>
                <Navbar />

                <div className='w-full h-full flex flex-row-reverse'>

                </div> */}



            {/* </div> */}
                    <AllQuiz/>

                    <div className='h-[100%] w-[100%] '>
                    <QuizBox/>

                    </div>
        </div>
    )
}

export default QuizPage
