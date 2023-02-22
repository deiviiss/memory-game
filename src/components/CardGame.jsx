import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardGame ({ link }) {
  return (
    <div >
      <Link to={`/games/${link.gameId}`} >{link.nameGame}</Link>
    </div>
  )
}

CardGame.propTypes = {
  link: PropTypes.object.isRequired
}
