import React from 'react'

function ProblemDiscription() {
  return (
    <div className='problem_dec_css m-4 text-lg  '>
        <h1 className='text-center font-bold text-2xl text-green-600' > title</h1>
          <div className='flex  justify-between m-3'><h2>difficulty</h2> <h2> done</h2> </div>
            <div className='flex gap-3 m-3'>
                  <span className='text-red-700 '>Categroy</span> 
                  <span className='bg-gray-400 text-gray-700  text-sm p-1 rounded-sm center text-center  '> array </span>

            </div>
           
          <div className='my-6 bg-gray-200
           border-2  rounded-md p-3'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eveniet, ipsam mollitia asperiores suscipit nostrum quibusdam dicta eligendi! Eius error consequatur, repudiandae dicta nihil possimus! Id iure magni ex ducimus?</p>
          </div>
    </div>
  )
}

export default ProblemDiscription
