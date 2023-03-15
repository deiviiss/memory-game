// import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'

export default function GamePage () {
  const params = useParams()

  return (
    <>
      <BoardGame/>
      
      <div className="flex w-full flex-row justify-around items-center mb-3 fixed bottom-0 left-0 bg-secondary-gradient bg-no-repeat">
        {/* level */}
        <CardBoard data={2} />
        {/* timer */}
        <CardBoard data={'00:00'}/>
        {/* score */}
        <CardBoard data={2}/>
        {/* attempts */}
        <CardBoard data={4}/>
      </div>

    </>

  )
}
