import PropTypes from 'prop-types'

<<<<<<< HEAD
export default function CardBoard () {
  return (
    <div className=' text-center m-4 p-2 bg-primary rounded-md w-32 text-white'>
      <p>data information</p>
=======
export default function CardBoard ({ data }) {
  return (
    <div className='flex flex-col justify-center items-center w-32 h-15 text-4xl text-white'>
      <div>{data}</div>
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033
    </div>
  )
}

<<<<<<< HEAD
// CardBoard.propTypes = {
//   data: PropTypes.object.isRequired
// }
=======
CardBoard.propTypes = {
  data: PropTypes.any.isRequired
}
>>>>>>> cc00a1939a8ccd1638a9647500f86b66c9175033
