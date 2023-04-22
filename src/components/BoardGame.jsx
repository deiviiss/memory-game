import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useCards } from '../context/GameContext'
import CardGame from './CardGame'
import Modal from './Modal'

export default function BoardGame ({ clickedStart, setClickedStart }) {
  const { cardsGame, setCardsGame, currentLevel, setCurrentLevel, usedCards, setUsedCards, avoidCards, setMove, move } = useCards()

  const [maxPairNumber, setMaxPairNumber] = useState(1)
  const [cardsLevel, setCardsLevel] = useState([])
  const [canPlay, setCanPlay] = useState(false)

  const [selectedCard, setSelectedCard] = useState([]) // cards selected
  const [foundCard, setFoundCard] = useState([]) // cards found

  const [modal, changeModal] = useState(true)

  const selectRandomCards = (cards, numCards) => {
    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)

    // Check cards on usedCards or avoidCards
    while (usedCards.some(usedCard => randomCards.find(randomCard => randomCard.id === usedCard.id)) || avoidCards.some(avoidCard => randomCards.find(randomCard => randomCard.id === avoidCard.id))) {
      randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)
    }

    return randomCards
  }

  const shuffleCards = (cards) => {
    // copy array to not modify
    const shuffledCards = cards.slice()

    // used Fisher-Yates
    for (let i = shuffledCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
    }

    return shuffledCards
  }

  const clearArrays = () => {
    setSelectedCard([])
    setFoundCard([])
  }

  const setCardsForLevel = () => {
    let cards = []

    cards = selectRandomCards(cardsGame, (currentLevel + 1))

    setMaxPairNumber(cards.length)
    setMove(cards.length + 3)

    const cardsPlay = shuffleCards(cards.concat(cards))

    setCardsLevel(cardsPlay.map((card, index) => {
      const updateCard = { ...card, index }
      return updateCard
    }))
  }

  const handleClickedStart = () => {
    setClickedStart(false)

    if (cardsGame.length < currentLevel) {
      console.log('¿What happend now? There are no more cards to use at the current level')
    } else {
      setCardsForLevel()
      setCanPlay(true)
    }
  }

  useEffect(() => {
    if (move === 0) {
      setClickedStart(true)
    }
    if (selectedCard.length === 2) {
      setMove(move - 1)

      if (selectedCard[0].id === selectedCard[1].id) {
        setFoundCard(foundCard => foundCard.concat(selectedCard))
        setSelectedCard([])
      } else {
        setTimeout(() => setSelectedCard([]), 1000)
      }
    }
  }, [selectedCard])

  useEffect(() => {
    if (foundCard.length === (maxPairNumber * 2)) {
      const newUsedCards = foundCard.concat(usedCards)
      setUsedCards(newUsedCards)
      // delete usedCards from cardsGame
      const result = cardsGame.filter(card => !newUsedCards.some(newUsedCard => newUsedCard.id === card.id))
      setCardsGame(result)

      setTimeout(() => clearArrays(), 1000)
      setTimeout(() => setCanPlay(false), 2000)
      setTimeout(() => setClickedStart(true), 2000)
      setTimeout(() => setCurrentLevel(currentLevel + 1), 3000)

      console.log('level complete')
    }
  }, [foundCard])

  return (
    <div className='flex justify-center items-center z-40 h-full'>

<button className={`px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700 ${clickedStart && cardsGame.length !== 0 ? '' : 'hidden'}`} onClick={handleClickedStart}>
        Start
      </button>

{ /* <Modal
            state={modal}
            changeState={changeModal}
            title={currentLevel <= 1 ? 'Lets play!' : (move === 0 ? 'Sorry, you lost' : 'Ready for next level?')}
          >
            <div className='flex items-center my-4'>
              <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeModal(modal)}>Go home</button>
              <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeModal(modal)}>{currentLevel <= 1 ? 'Start' : (move === 0 ? 'Retry' : 'Continue')}</button>
            </div>
        </Modal> */ }

{cardsLevel.length > 0 &&
  <ul className={`px-4 grid justify-center items-center auto-cols-min grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${!canPlay ? 'hidden' : ''}`}>
    {
      cardsLevel?.map((card, index) => (
        <CardGame key={index} card={card} setSelectedCard={setSelectedCard} selectedCard={selectedCard} foundCard={foundCard} />
      ))
    }
  </ul>
}
    </div>
  )
}
BoardGame.propTypes = {
  setClickedStart: PropTypes.any,
  clickedStart: PropTypes.bool
}
