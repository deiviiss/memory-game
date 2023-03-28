import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useCards } from '../context/GameContext'
import CardGame from './CardGame'

export default function BoardGame ({ gameId }) {
  const { getCardsGame, cardsGame, currentLevel, usedCards, avoidCards, setMove } = useCards()

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
    console.log(cards.length)
    setMaxPairNumber(cards.length)
    setMove(cards.length + 3)

    const duplicateCards = cards.concat(cards)

    setCardsLevel(duplicateCards.map((card, index) => {
      const updateCard = { ...card, index }
      return updateCard
    }))
  }

  const handleClick = () => {
    //! move to cardGame props
    setClickedStart(true)

    if (cardsGame.length < currentLevel) {
      console.log('cards is over')
      console.log('¿What happend now?')
      setCardsOver(true)
    } else {
      setCardsForLevel(cardsGame)
    }
  }

  return (
    <div className='flex justify-center items-center z-40 h-full'>
      <button className={clickedStart || cardsGame === undefined ? 'hidden' : ''} onClick={handleClick}>Start</button>
      <ul className={`px-4 grid justify-center items-center auto-cols-min grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${cardsOver ? 'hidden' : ''}`}>
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
