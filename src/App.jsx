import React, { useState } from 'react';
import './App.css'
import Ranquote from './components/Ranquote'
import Suerbtnquote from './components/Suerbtnquote'
import getRandomElemArray from './utils/getRandomElemArray'
import phrases from './utils/phrases.json'
import './index.css';


function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  
const [ranquote, setRanquote] = useState(phraseRandom)
const [numberBg, setnumberBg] = useState(numberRandom)

const bgStyle = {
   backgroundImage: `url(/fondo${numberBg}.jpg)`
}

 
  
  return (
    <div className='container'  style={bgStyle}>
      <h1 className='container__title '>Galleta de la fortuna</h1>
      <Ranquote  phrase={ranquote} /> 
      <Suerbtnquote
      setRanquote={setRanquote}
      phrases={phrases}
      setNumberBg={setnumberBg}
      />
    </div>
  )
}

export default App
