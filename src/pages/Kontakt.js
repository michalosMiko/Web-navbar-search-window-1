import React from 'react'
import "./Kontakt.css"
import VoteComponentas from '../Components/VoteComponentas';

const Kontakt = () => {
  return (
    <div className='kontakt-box'>Kontakt
        <h2>Obchodní oddělení: Václav Haškovec</h2>
        <h3>tel:737243327</h3>
        <h3>vaclav.haskovec@seznam.cz</h3>
        <VoteComponentas />
    </div>
  )
}

export default Kontakt