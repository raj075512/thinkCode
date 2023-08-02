import { problems } from '@/pages/ProblemSet/Problem'
import React from 'react'
import {BsCheckCircle} from "react-icons/bs"
import Link from 'next/link'


function ProblemsTable() {
 

  return (
    // map the user made data , later is will rovideed by api  call back //

   
    <tbody  >
       {
        problems.map((_body,_idx)=>{
          
          const difficultyColor= _body.difficulty==="Easy" ?
          "text-green-600":_body.difficulty==="Medium"?"text-yellow-600":"text-red-500";
        

          return (
            
            <tr className={`${_idx%2==0?"bg-gray-200 ":" "}` } key={_body.id }>
              <th  className=' border-solid px-4 text-green-400'>
                   <BsCheckCircle fontSize="20" width='18'/>
              </th>
              <td className='px-6 py-2'>
                 <Link className='hover:text-green-500 cursor-pointer font-medium' href={`/problems/${_body.id}`}>
                     {_body.title}
                 </Link>
              </td>
              <td  className={`px-6 py-4 ${difficultyColor}`}> 
                 {_body.difficulty}

              </td>
              <td className='px-5 py-4'>
                 {_body.category}
              </td>

            </tr>
          
          )
        })
       }
      
    </tbody>
  )
}

export default ProblemsTable
