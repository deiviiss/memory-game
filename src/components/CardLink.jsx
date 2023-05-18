import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function CardLink ({ link }) {
  return (
    <div className="w-full h-24 flex items-center justify-around px-4 my-4 text-center text-3xl bg-secondary-gradient bg-no-repeat rounded-md text-secondary hover:border-2 hover:border-secondary md:text-4xl dark:bg-dark-secondary-gradient">
      <Link to={`/games/${link.gameId}`} as="div" className="w-3/4 h-full flex flex-col justify-around">
        <span className="text-left whitespace-nowrap">{link.nameGame}</span>
        <div className="flex justify-between items-center">
          <div>0/0</div>
          <div>00:00</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 cursor-pointer md:w-8 md:h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </div>
      </Link>
      <div className="w-1/4 h-full flex flex-col items-end justify-around pl-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 icon icon-tabler icon-tabler-dots-vertical cursor-pointer md:w-8 md:h-8"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
          <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer md:w-8 md:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
    </div>
  )
}

CardLink.propTypes = {
  link: PropTypes.object.isRequired
}
