import React from 'react'
import CardList from '../CardList/CardList'
import './CardListContainer.sass'
import { getFetch } from '../Helpers/mock'
import {useEffect, useState} from 'react'

function CardListContainer() {
    const [cards,setCards] = useState([])
    const [loading,setLoading] = useState(true)



    useEffect(() => {

        getFetch
        .then ( resp =>  setCards(resp))
        .catch ( err => console.log(err))
        .finally(() =>setLoading(false))

    }, [])
    

    return (
        <div className='card-list-container'>
            
        { loading ? 
        
        <h1 className='loading'>Cargando...</h1>
        :
        <CardList  cards={cards}/>
        
    }
        </div>
    )
}

export default CardListContainer