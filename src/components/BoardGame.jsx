import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useCards } from '../context/GameContext'
import CardGame from './CardGame'
import Modal from './Modal'
import { formatTime } from '../utils/helpers'

export default function BoardGame ({ canPlay, setCanPlay, setTimeElapsed, timeElapsed, timerOn, setTimerOn }) {
  const {
    cardsGame,
    setCardsGame,
    currentLevel,
    setCurrentLevel,
    usedCards,
    setUsedCards,
    avoidCards,
    setMove,
    move
  } = useCards()

  const [maxPairNumber, setMaxPairNumber] = useState(1)
  const [cardsLevel, setCardsLevel] = useState([])
  const [cardsLoad, setCardsLoad] = useState(false)
  const [selectedCard, setSelectedCard] = useState([]) // cards selected
  const [foundCard, setFoundCard] = useState([]) // cards found
  const [showAllCards, setShowAllCards] = useState(false)

  // MODAL
  const [openModal, setOpenModal] = useState(true)

  const [infoModal, setInfoModal] = useState({
    buttonLabel: 'Start',
    title: 'Lets play',
    info: '',
    move: `Moves: ${move}`,
    level: `Level: ${currentLevel}`
  })

  // TIMER
  const [intervalId, setIntervalId] = useState(null)

  // GAME
  const selectRandomCards = (cards, numCards) => {
    let randomCards = cards.sort(() => 0.5 - Math.random()).slice(0, numCards)

    // Check cards on usedCards or avoidCards
    while (
      usedCards.some((usedCard) =>
        randomCards.find((randomCard) => randomCard.id === usedCard.id)
      ) ||
      avoidCards.some((avoidCard) =>
        randomCards.find((randomCard) => randomCard.id === avoidCard.id)
      )
    ) {
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
      [shuffledCards[i], shuffledCards[j]] = [
        shuffledCards[j],
        shuffledCards[i]
      ]
    }

    return shuffledCards
  }

  const setCardsForLevel = () => {
    let cards = []

    cards = selectRandomCards(cardsGame, currentLevel + 1)
    setMaxPairNumber(cards.length)
    setMove(cards.length + 3)
    setInfoModal((prevModal) => ({
      ...prevModal,
      move: `Moves Left: ${move}`
    }))

    const cardsPlay = shuffleCards(cards.concat(cards))

    setCardsLevel(
      cardsPlay.map((card, index) => {
        const updateCard = { ...card, index }
        return updateCard
      })
    )
  }

  const handleClickedStart = () => {
    setShowAllCards(true)
    setOpenModal(false)
    clearArrays()
    setTimeout(() => setShowAllCards(false), 2000)

    if (cardsGame.length < currentLevel) {
      console.log(
        '¿What happend now? There are no more cards to use at the current level'
      )
    } else {
      setCardsForLevel()
      setCanPlay(true)
    }
  }

  const clearArrays = () => {
    setSelectedCard([])
    setFoundCard([])
  }

  const stopTimer = () => {
    clearInterval(intervalId)
  }

  const resetTimer = () => {
    setTimeElapsed(0)
  }

  const checkIsWon = () => {
    // check if the moments are 0
    if (move === 0) {
      // if they are 0 check if the pairs are equal to found
      if (foundCard.length === maxPairNumber * 2) {
        playerWins()
      } else {
        playerLoses()
      }
    }

    // check if found all pairs
    if (foundCard.length === maxPairNumber * 2) {
      playerWins()
    }
  }

  const playerLoses = () => {
    console.log('player loses')
    setTimerOn(false)
    stopTimer()
    setCanPlay(false)
    // setTimeout(() => setCanPlay(false), 1000) ????
    resetTimer()
    setTimeout(() => setCardsLevel(''), 2000)
    setInfoModal(
      {
        buttonLabel: 'Retry!',
        title: 'Sorry, you lost',
        info: 'Theres is not moves',
        time: `Time: ${formatTime(timeElapsed)}`,
        move: `Moves Left: ${move}`
      })
    setTimeout(() => setOpenModal(true), 2000)
    console.log('level incomplete')
  }

  const playerWins = () => {
    console.log('player win')
    setTimerOn(false)
    stopTimer()
    setCanPlay(false)
    // setTimeout(() => setCanPlay(false), 5000) ?????
    resetTimer()
    setTimeout(() => setCardsLevel(''), 2000)
    setInfoModal(
      {
        buttonLabel: 'Sure!',
        title: 'Ready for next level?',
        time: `Time: ${formatTime(timeElapsed)}`,
        level: `Level: ${currentLevel}`,
        move: `Moves Left: ${move}`
      }
    )
    setTimeout(() => setOpenModal(true), 2000)
    console.log('level complete')

    //! PREPARE NEW LEVEL
    const newUsedCards = foundCard.concat(usedCards)
    setUsedCards(newUsedCards)
    // delete usedCards from cardsGame
    const result = cardsGame.filter(
      (card) =>
        !newUsedCards.some((newUsedCard) => newUsedCard.id === card.id)
    )
    setCardsGame(result)
    setTimeout(() => setCurrentLevel(currentLevel + 1), 3000)
  }

  useEffect(() => {
    // executed by flipping 2 cards
    if (selectedCard.length === 2) {
      console.log('se ejecuta al voltear 2 cartas')
      setMove(move - 1)

      // compare if they are the same, if they are, add them to the array of found
      if (selectedCard[0].id === selectedCard[1].id) {
        console.log('las cartas son iguales')
        setFoundCard((foundCard) => foundCard.concat(selectedCard))
        setSelectedCard([])
      } else {
        setTimeout(() => setSelectedCard([]), 1000)
      }
    }

    if (canPlay) {
      checkIsWon()
    }
  }, [selectedCard, foundCard])

  useEffect(() => {
    if (timerOn) {
      setIntervalId(setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1)
      }, 1000))
    }
  }, [timerOn])

  useEffect(() => {
    if (cardsGame.length > 0) {
      console.log('Cards load')
      setCardsLoad(true)
    }
  }, [cardsGame])

  useEffect(() => {
    setCardsForLevel()
  }, [cardsGame])

  const InfoModal = () => {
    return (
       <>
      <div className="flex flex-col items-center my-2 space-x-2 space-y-2">
        <div>
        <p>{infoModal.time}</p>
        <p>{infoModal.level}</p>
        <p>{infoModal.move}</p>
        <p>{infoModal.info}</p>
        </div>
        <button className="w-full px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700 whitespace-nowrap dark:bg-dark-secondary-gradient">
          Go home
        </button>
        <button
            className={'w-full px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700 dark:bg-dark-secondary-gradient'}
            onClick={handleClickedStart}
          >
            {infoModal.buttonLabel}
        </button>
      </div>
        </>
    )
  }

  return (
    <div className="flex justify-center items-center z-40 h-full">

{cardsLoad
  ? <Modal open={openModal} setOpen={setOpenModal} title={infoModal.title}>
       <InfoModal />
      </Modal>
  : 'Cargando cartas'}

      {cardsLevel.length > 0 && (
        <ul
          className={`w-full grid justify-center items-center px-4 auto-cols-min grid-cols-3 sm:grid-cols-4 md:grid-cols-6 md:px-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 ${
            !canPlay ? 'hidden' : ''
          }`}
        >
          {cardsLevel?.map((card, index) => (
            <CardGame
              key={index}
              card={card}
              setSelectedCard={setSelectedCard}
              selectedCard={selectedCard}
              foundCard={foundCard}
              showAllCards={showAllCards}
              timeElapsed = {timeElapsed}
              setTimeElapsed={setTimeElapsed}
              timerOn = {timerOn}
              setTimerOn = {setTimerOn}
            />
          ))}
        </ul>
      )}
    </div>
  )
}
BoardGame.propTypes = {
  canPlay: PropTypes.bool,
  setCanPlay: PropTypes.any,
  setTimeElapsed: PropTypes.any,
  timeElapsed: PropTypes.any,
  timerOn: PropTypes.any,
  setTimerOn: PropTypes.any
}
