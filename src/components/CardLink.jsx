import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardLink ({ link }) {
  return (
<<<<<<< HEAD
    <div className=' text-center m-4 p-2 bg-red-300 rounded-md w-32 hover:bg-gray-500 hover:text-white'>
      <h1>CardLink</h1>
=======
    <div className=' text-center m-4 p-2 bg-secondary-gradient bg-no-repeat rounded-md w-90 hover:bg-gray-500 hover:text-white'>
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033
      <Link to={`/games/${link.gameId}`} >{link.nameGame}</Link>
    </div>
  )
}

CardLink.propTypes = {
  link: PropTypes.object.isRequired
}
