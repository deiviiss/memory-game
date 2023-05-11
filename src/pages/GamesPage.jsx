import { Outlet } from 'react-router-dom'
import CardLink from '../components/CardLink'
import apis from '../services/api/endPoints'

export default function GamesPage () {
  return (
    <div className='w-screen pt-4 px-4'>
      <h3>What game theme do you want to play?</h3>
      <div className='w-3/4 mx-auto'>
        {
        apis.map(link => (
          <CardLink link={link} key={link.gameId}/>
        ))
      }
      </div>

      <Outlet />
    </div>
  )
}
