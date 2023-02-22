import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardLink ({ link }) {
  return (
    <div className=' text-center m-4 p-2 bg-red-300 rounded-md w-32 hover:bg-gray-500 hover:text-white'>
      <Link to={`/games/${link.gameId}`} >{link.nameGame}</Link>
    </div>
  )
}

CardLink.propTypes = {
  link: PropTypes.object.isRequired
}
