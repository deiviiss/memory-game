import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'
import { useCards } from '../context/GameContext'
import { useState, useEffect } from 'react'
import { formatTime } from '../utils/helpers'

export default function GamePage () {
  const params = useParams()
  const { getCardsGame, currentLevel, move } = useCards()

  const [canPlay, setCanPlay] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    getCardsGame(parseInt(params.gameId))
  }, [])

  return (
    <>
      <BoardGame canPlay = {canPlay} setCanPlay={setCanPlay} timeElapsed = {timeElapsed} setTimeElapsed={setTimeElapsed} timerOn = {timerOn} setTimerOn = {setTimerOn}/>

      <div className={`fixed bottom-0 left-0 w-full flex flex-row justify-around items-center bg-secondary-gradient bg-no-repeat dark:bg-dark-secondary-gradient ${canPlay ? '' : 'hidden'}`}>
        {/* level */}
        <CardBoard name={'Lvl'} data={currentLevel} />
        {/* timer */}
        <CardBoard name={'Timer'} data={formatTime(timeElapsed)}/>

        {/* score */}
        <CardBoard name={'Moves'} data={move}/>
        {/* attempts */}
      </div>
</>
  )
}
