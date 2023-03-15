import React,{useContext} from 'react'
import { ContextData } from '../App'
import '../CSS-files/SearchBox.css'
const SearchBox = () => {
  const {input,setInput,setButton}=useContext(ContextData)
  return (
    <>
    <div className='SearchBox'>
    <input type="text" placeholder='Search Movie Here !!' value={input} onChange={(e)=>{
      setInput(e.target.value)

    }}  />
    <button onClick={()=>{
  // console.log(input);
  setButton(input);

      
    }}>Search Movies</button>
    </div>
   
    </>
  )
}

export default SearchBox