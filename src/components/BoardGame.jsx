import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useCards } from '../context/GameContext'
import CardGame from './CardGame'
import Modal from './Modal'

export default function BoardGame ({ canPlay, setCanPlay }) {
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

  const [selectedCard, setSelectedCard] = useState([]) // cards selected
  const [foundCard, setFoundCard] = useState([]) // cards found

  const [showAllCards, setShowAllCards] = useState(false)

  const [openModal, setOpenModal] = useState(true)

  const [infoModal, setInfoModal] = useState({
    buttonLabel: 'Start',
    title: 'Lets play'
    // Podemos agregar más info al modal desde aquí.
  })

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

  const checkIsWon = () => {
    // comprobar si los momientos son 0
    if (move === 0) {
      // si son 0 comprobar si los pares son iguales a found
      if (foundCard.length === maxPairNumber * 2) {
        playerWins()
      } else {
        console.log('player loses')
        playerLoses()
      }
    }

    // comprobar si encontro todos los pares
    if (foundCard.length === maxPairNumber * 2) {
      playerWins()
    }
  }

  const playerLoses = () => {
    console.log('detengo el juego por que perdio, no tiene movimientos y no alcanzo los pares')
    setTimeout(() => setCanPlay(false), 1000)
    setTimeout(() => setCardsLevel(''), 2000)
    setInfoModal({ buttonLabel: 'Retry!', title: 'Sorry, you lost' })
    setTimeout(() => setOpenModal(true), 2000)
    console.log('level incomplete')
  }

  const playerWins = () => {
    const newUsedCards = foundCard.concat(usedCards)
    setUsedCards(newUsedCards)
    // delete usedCards from cardsGame
    const result = cardsGame.filter(
      (card) =>
        !newUsedCards.some((newUsedCard) => newUsedCard.id === card.id)
    )
    setCardsGame(result)

    setTimeout(() => setCanPlay(false), 1000)
    setTimeout(() => setCardsLevel(''), 2000)
    setInfoModal({ buttonLabel: 'Sure!', title: 'Ready for next level?' })
    setTimeout(() => setCurrentLevel(currentLevel + 1), 3000)
    setTimeout(() => setOpenModal(true), 2000)
    console.log('level complete')
  }

  // se activa al agregar cards to array selectCard || foundCard
  useEffect(() => {
    // compara si son iguales, si lo son las agrega al arreglo de found
    if (selectedCard.length === 2) {
      console.log('se ejecuta al voltear 2 cartas')
      setMove(move - 1)

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

  const InfoModal = () => {
    return (
       <>
      <div className="flex flex-col items-center my-2 space-x-2 space-y-2">
        <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700 whitespace-nowrap">
        Go home
        </button>
        <button
            className={'px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700'}
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

      <Modal open={openModal} setOpen={setOpenModal} title={infoModal.title}>
       <InfoModal />
      </Modal>

      {cardsLevel.length > 0 && (
        <ul
          className={`w-full px-6 grid justify-center items-center auto-cols-min grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${
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
            />
          ))}
        </ul>
      )}
    </div>
  )
}
BoardGame.propTypes = {
  canPlay: PropTypes.bool,
  setCanPlay: PropTypes.any
}
