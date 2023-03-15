import { Outlet } from 'react-router-dom'
import CardLink from '../components/CardLink'
import apis from '../services/api/endPoints'

export default function GamesPage () {
  return (
    <div className='text-center'>
      <h1>Games Page</h1>
      <h3>Lista de apis que se pueden jugar disponibles</h3>
      <div className='w-96 mx-auto'>
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
