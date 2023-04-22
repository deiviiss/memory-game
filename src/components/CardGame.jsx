import PropTypes from 'prop-types'
import cardImg from '../../public/imgs/card.jpg'

export default function CardGame ({ card, setSelectedCard, selectedCard, foundCard, showAllCards }) {
  const handleClickCard = (card) => {
    if (!selectedCard.includes(card) && selectedCard.length <= 2 && !foundCard.includes(card)) {
      console.log('card add to select')
      setSelectedCard(selectedCard => selectedCard.concat(card))
    }
  }

  const include = showAllCards || selectedCard.includes(card) || foundCard.includes(card)

  return (
    <li onClick={() => handleClickCard(card)} className="flex items-center justify-center py-4" >

      <div className={'w-24 h-32 bg-transparent cursor-pointer preserve-3d perspective relative'}>

        <div className={`absolute h-32 w-24 backface-hidden duration-500 ${include ? 'rotate-y-180' : ''}`}>
          <img className="w-full h-full object-cover rounded-md" src={cardImg} alt={card.name} />
        </div>

        <div className={`absolute h-32 w-24 backface-hidden overflow-hidden duration-500  ${include ? '' : 'rotate-y-180'}`}>
          <img className="w-full h-full object-cover rounded-md" src={card.image} alt={card.name} />
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
