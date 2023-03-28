import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'
import { useCards } from '../context/GameContext'

export default function GamePage () {
  const params = useParams()
  const { currentLevel, move } = useCards()

  return (
    <>
      <BoardGame gameId={parseInt(params.gameId)}/>

      <div className="flex w-full flex-row justify-around items-center mb-3 fixed bottom-0 left-0 bg-secondary-gradient bg-no-repeat">
        {/* level */}
        <CardBoard name={'Lvl'} data={currentLevel} />
        {/* timer */}
        <CardBoard name={'Timer'} data={'00:00'}/>

        {/* score */}
        <CardBoard name={'Moves'} data={move}/>
        {/* attempts */}
      </div>
</>
  )
}
