import error from '../../public/imgs/error.svg'
import { Link } from 'react-router-dom'

export default function NotFoundPage () {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center pt-12 space-y-4 md:pt-20'>
      <img src={error} />
      <h1 className='text-4xl md:text-5xl'>Sorry, page not found</h1>
      <Link to="/." className="text-3xl flex items-center hover:underline md:text-4xl">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 12l14 0"></path>
          <path d="M5 12l6 6"></path>
          <path d="M5 12l6 -6"></path>
        </svg>
        <h2>Go home</h2>
      </Link>
    </div>
  )
}
