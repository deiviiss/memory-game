import PropTypes from 'prop-types'
import cardImg from '../../public/imgs/card.jpg'

export default function CardGame ({ card, setSelectedCard, selectedCard, foundCard, showAllCards }) {
  const handleClickCard = (card) => {
    if (!selectedCard.includes(card) && selectedCard.length < 2 && !foundCard.includes(card)) {
      console.log('card add to select')
      setSelectedCard(selectedCard => selectedCard.concat(card))
    }
  }

  const include = showAllCards || selectedCard.includes(card) || foundCard.includes(card)

  return (
    <li onClick={() => handleClickCard(card)} className="flex items-center justify-center py-2 md:py-4" >

      <div className={"relative w-20 h-32 bg-transparent preserve-3d perspective cursor-pointer md:w-24 md:h-36"}>

        <div className={`absolute w-20 h-32 backface-hidden duration-500 md:w-24 md:h-36 ${include ? 'rotate-y-180' : ''}`}>
          <img className="w-full h-full object-cover rounded-md border-2 border-primary drop-shadow-lg" src={cardImg} alt={card.name} />
        </div>

        <div className={`absolute w-20 h-32 overflow-hidden backface-hidden duration-500 md:w-24 md:h-36  ${include ? '' : 'rotate-y-180'}`}>
          <img className="w-full h-full object-cover rounded-md border-2 border-primary drop-shadow-lg" src={card.image} alt={card.name} />
        </div>

      </div>
    </li>
  )
}

CardGame.propTypes = {
  card: PropTypes.object.isRequired,
  selectedCard: PropTypes.array,
  setSelectedCard: PropTypes.func,
  foundCard: PropTypes.array,
  showAllCards: PropTypes.bool
}
