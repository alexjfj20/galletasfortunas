import getRandomElemArray from '../utils/getRandomElemArray'
import React from 'react'

const Suerbtnquote = ({setRanquote, phrases, setNumberBg}) => {

  const handleRandomPhrase = () => {
    setRanquote(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }
  return (
    <button className='container__btn' onClick={handleRandomPhrase}>Busca fortuna ahora</button>
  )
}

export default Suerbtnquote