import PropTypes from 'prop-types'

export default function CardBoard ({ data, name }) {
  return (
    <div className='w-32 h-15 flex flex-col justify-center items-center text-4xl text-secondary'>
      <p>{name}</p>
      <div>{data}</div>

    </div>
  )
}

CardBoard.propTypes = {
  data: PropTypes.any.isRequired,
  name: PropTypes.string
}
