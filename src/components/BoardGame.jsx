import PropTypes from 'prop-types'
import { useCards } from '../context/GameContext'
import { useEffect, useState } from 'react'
import CardGame from './CardGame'

export default function BoardGame ({ gameId }) {
  const { getCardsGame, cardsGame, currentLevel, usedCards, avoidCards } = useCards()

  const [maxPairNumber, setMaxPairNumber] = useState('')
  const [cardsLevel, setCardsLevel] = useState([])

  const [selected, setSelected] = useState([]) // cards select
  const [clickedStart, setClickedStart] = useState(false)
  const [cardsOver, setCardsOver] = useState(false)

  useEffect(() => {
    getCardsGame(gameId)
  }, [])

  const selectRandomCards = (cards, numCards) => {
    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)

    // Check cards on usedCards or avoidCards
    while (usedCards.some(usedCard => randomCards.find(randomCard => randomCard.id === usedCard.id)) || avoidCards.some(avoidCard => randomCards.find(randomCard => randomCard.id === avoidCard.id))) {
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
    setClickedStart(true)

    if (cardsGame.length < currentLevel) {
      console.log('cards is over')
      console.log('¿What happend now?')
      setCardsOver(false)
    } else {
      setCardsForLevel(cardsGame)
    }
  }

  return (
    <div className='flex justify-center align-items: center'>
    <button className={clickedStart || cardsGame === undefined ? 'hidden' : ''} onClick={handleClick}>Start</button>
    <ul className={`w-full h-full grid items-center justify-items-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 ${cardsOver ? 'hidden' : ''}`}>
      {
        cardsLevel?.map((card, index) => (
        <CardGame card={card} key={index} setSelected={setSelected} selected={selected} maxPairNumber={maxPairNumber} setClicked={setClickedStart} clicked={clickedStart}/>
        ))
      }
    </ul>
    </div>
  )
}
BoardGame.propTypes = {
  gameId: PropTypes.number.isRequired
}
