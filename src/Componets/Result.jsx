import React, { useContext } from 'react'
import { ContextData } from '../App'
import '../CSS-files/Result.css'
const Result = () => {
  const { result } = useContext(ContextData)
  // console.log(result)
 if(result){
  return (
    <>
      <div className='Result'>
 
       {
        result.map((e)=>{
          console.log(e)
          return <div className='card'>
            
              <h1>{e.Title}</h1>
              <div className="poster">
                <img src={e.Poster} alt="" />
              </div>
              <div className="reliesdate">
                <p>{e.Year}</p>
                <p>{e.Type}</p>
              </div>

            </div>
          
        })
        

       }
       

      </div>

    </>
  )
 }
 else{
  return <h1>No match Result </h1>
 }
 
}

export default Result