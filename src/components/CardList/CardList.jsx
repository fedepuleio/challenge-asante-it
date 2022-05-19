import React from 'react'
import Card from '../Card/Card'
import './CardList.sass'

function CardList({cards}) {
    return (
    <div className='card-list'>
    {cards.map((card) => (
        <Card key={card.id} card={card}/>
    ))}
</div>
)
}

export default CardList