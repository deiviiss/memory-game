import PropTypes from 'prop-types'

export default function CardBoard ({ data }) {
  return (
    <div className=' text-center m-4 p-2 bg-primary rounded-md w-32 text-white'>
      <p>{data}</p>
    </div>
  )
}

CardBoard.propTypes = {
  data: PropTypes.any.isRequired
}
