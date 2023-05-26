import PropTypes from 'prop-types'
import cardImg from '../assets/imgs/card.png'
import darkImg from '../assets/imgs/darkcard.png'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

export default function CardGame ({ card, setSelectedCard, selectedCard, foundCard, showAllCards, timerOn, setTimerOn }) {
  const handleClickCard = (card) => {
    if (timerOn === false) {
      setTimerOn(true)
    }

    if (!selectedCard.includes(card) && selectedCard.length < 2 && !foundCard.includes(card)) {
      console.log('card add to select')
      setSelectedCard(selectedCard => selectedCard.concat(card))
    }
  }

  const include = showAllCards || selectedCard.includes(card) || foundCard.includes(card)
  const { theme } = useContext(ThemeContext)

  return (
    <li onClick={() => handleClickCard(card)} className="flex items-center justify-center py-2 md:py-4" >

      <div className="relative w-20 h-32 bg-transparent preserve-3d perspective cursor-pointer md:w-24 md:h-36">

        <div className={`absolute w-20 h-32 backface-hidden duration-500 md:w-24 md:h-36 ${include ? 'rotate-y-180' : ''}`}>
          <img className="w-full h-full object-cover rounded-md border-2 border-primary drop-shadow-lg dark:border-secondary" src={theme === 'dark' ? darkImg : cardImg} alt={card.name} />
        </div>

        <div className={`absolute w-20 h-32 overflow-hidden backface-hidden duration-500 md:w-24 md:h-36  ${include ? '' : 'rotate-y-180'}`}>
          <img className="w-full h-full object-cover rounded-md border-2 border-primary drop-shadow-lg dark:border-secondary" src={card.image} alt={card.name} />
        </div>

      </div>
    </li>
  )
}
//! colocar propiedades correctas
CardGame.propTypes = {
  card: PropTypes.object.isRequired,
  selectedCard: PropTypes.array,
  setSelectedCard: PropTypes.func,
  foundCard: PropTypes.array,
  showAllCards: PropTypes.bool,
  timerOn: PropTypes.any,
  setTimerOn: PropTypes.any
}
