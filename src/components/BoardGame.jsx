import PropTypes from 'prop-types'
import { useCards } from '../context/GameContext'
import { useEffect, useState } from 'react'
import CardGame from './CardGame'

export default function BoardGame ({ gameId }) {
  const { getCardsGame, cardsGame, currentLevel, usedCards, avoidCards } = useCards()

  const [maxPairNumber, setMaxPairNumber] = useState('')
  const [cardsLevel, setCardsLevel] = useState([])

  // cards select
  const [selected, setSelected] = useState([])
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    getCardsGame(gameId)
  }, [])

  const isCardAllow = (card, arr) => {
    return arr.includes(card)
  }

  const selectRandomCards = (cards, numCards) => {
    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)
    // Check cards on usedCards or avoidCards
    while (randomCards.some(card => isCardAllow(card, usedCards) || isCardAllow(card, avoidCards))) {
      randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)
    }

    return randomCards
  }

  const setCardsForLevel = () => {
    let cards = []

    cards = selectRandomCards(cardsGame, currentLevel)

    setMaxPairNumber(cards.length)

    const duplicateCards = cards.concat(cards)

    setCardsLevel(duplicateCards.map((card, index) => {
      const updateCard = { ...card, index }
      return updateCard
    }))
  }

  const handleClick = () => {
    if (cardsGame === undefined) {
      console.log('There are not cardsGame yet')
      //! handle exception
    } else {
      setClicked(true)
      setCardsForLevel(cardsGame)
    }
  }

  return (
    <div className='flex justify-center align-items: center'>
    <button className={clicked ? 'hidden' : ''} onClick={handleClick}>Start</button>
    <ul className="w-full h-full grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
      {
        cardsLevel?.map((card, index) => (
        <CardGame card={card} key={index} setSelected={setSelected} selected={selected} maxPairNumber={maxPairNumber} setClicked={setClicked} clicked={clicked}/>
        ))
      }
    </ul>
    </div>
  )
}
BoardGame.propTypes = {
  gameId: PropTypes.number.isRequired
}
