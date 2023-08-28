import React from 'react'

const Ranquote = ({phrase}) => {

  console.log(phrase)

  return (
    <p className='container__phrase'>{phrase.phrase}</p>
  )
}

export default Ranquote