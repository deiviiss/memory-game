import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { useCards } from '../context/GameContext'

export default function CardGame ({ card, setSelected, selected, maxPairNumber, setClicked, clicked }) {
  const { setCurrentLevel, usedCards, setUsedCards, currentLevel, setCardsGame, cardsGame } = useCards()

  // cards found
  const [found, setFound] = useState([])

  const handleClick = (item) => {
    if (selected.length < 2) {
      setSelected(selected => selected.concat(item))
    }
  }

  const clearArrays = () => {
    setSelected([])
    setFound([])
  }

  let include = false

  include = selected.includes(card) || found.includes(card)

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].id === selected[1].id) {
        setFound(found => found.concat(selected))
        setSelected([])
      } else {
        setTimeout(() => setSelected([]), 1000)
      }
    }
  }, [selected])

  useEffect(() => {
    if (found.length === (maxPairNumber * 2)) {
      const newUsedCards = found.concat(usedCards)
      setUsedCards(newUsedCards)

      // delete usedCards from cardsGame
      const result = cardsGame.filter(card => !newUsedCards.some(newUsedCard => newUsedCard.id === card.id))

      setCardsGame(result)

      setTimeout(() => setClicked(false), 2000)
      setTimeout(() => clearArrays(), 1000)

      setCurrentLevel(currentLevel + 1)
      console.log('level complete')
    }
  }, [found])

  return (
    <li onClick={() => handleClick(card)} className="pb-8 cursor-pointer" >

      {/* content */}
      <div className={`content ${clicked ? '' : 'hidden'} py-5 `}>

        <div className={`front ${include ? 'flip-front' : ''}`}>
            <img className="w-24 h-32 object-cover rounded-md" src='https://img.freepik.com/vector-gratis/signo-interrogacion-moderno-pagina-ayuda-soporte_1017-27395.jpg?w=740&t=st=1679235518~exp=1679236118~hmac=181ac93b5af8c17e7535d53c0dc7c716a87484f8bae2d5d20f085427c48085e0' alt={card.name} />
        </div>

        <div className={`back ${include ? 'flip-back' : ''}`}>
          <img className="w-24 h-32 object-cover rounded-md" src={card.image} alt={card.name} />
        </div>

      </div>
    </li>
  )
}

CardGame.propTypes = {
  card: PropTypes.object.isRequired,
  selected: PropTypes.array,
  setSelected: PropTypes.func,
  maxPairNumber: PropTypes.number,
  setClicked: PropTypes.any,
  clicked: PropTypes.bool
}
