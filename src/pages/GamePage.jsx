// import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'

export default function GamePage () {
  const params = useParams()

  return (
    <>
      <div className="flex w-full flex-row justify-around items-center pt-6">
        {/* level */}
        <CardBoard data={2} />
        {/* timer */}
        <CardBoard data={'00:00 seconds'}/>
      </div>

      <BoardGame/>

      <div className="flex w-full flex-row justify-around items-center pt-6">
        {/* score */}
        <CardBoard data={2}/>
        {/* attempts */}
        <CardBoard data={4}/>
      </div>
</>

  )
}
