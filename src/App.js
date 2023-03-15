import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import SearchBox from './Componets/SearchBox';
import Result from './Componets/Result';

const ContextData = createContext()
function App() {
  const [input, setInput] = useState("")
  const [button, setButton] = useState("")
  const [result, setResult] = useState([])

  // console.log(button);
  useEffect(() => {

    data()
  }, [button])

  async function data() {
    const res = await fetch(`https://www.omdbapi.com/?s=${button}&apikey=e2ac1245`)
    const data = await res.json()
    console.log(data);
    setResult(data.Search)
  }

  return (
    <>
      <ContextData.Provider value={{ input: input, setInput: setInput, button: button, setButton: setButton,result:result, setResult: setResult }}>
        <div className="App">
          <div className='searchdiv'>
            <h2>Movies Adda</h2>
            <SearchBox />
          </div>
          <div className='outputdiv'></div>
          <Result />


        </div>
      </ContextData.Provider>
    </>
  );
}

export default App;
export { ContextData };