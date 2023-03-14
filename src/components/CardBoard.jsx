import PropTypes from 'prop-types'

export default function CardBoard ({ data }) {
  return (
    <div className='flex flex-col justify-center items-center w-32 h-8 bg-secondary-gradient bg-no-repeat text-2xl text-white rounded-lg'>
      <div>{data}</div>
    </div>
  )
}

CardBoard.propTypes = {
  data: PropTypes.any.isRequired
}
