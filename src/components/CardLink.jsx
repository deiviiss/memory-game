import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardLink ({ link }) {
  return (

    <div className=' text-center m-4 p-2 bg-secondary-gradient bg-no-repeat rounded-md w-90 text-white hover:bg-gray-500 '>
      <Link to={`/games/${link.gameId}`} >{link.nameGame}</Link>
    </div>
  )
}

CardLink.propTypes = {
  link: PropTypes.object.isRequired
}
