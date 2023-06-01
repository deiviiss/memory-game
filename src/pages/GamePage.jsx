import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
import { useCards } from '../context/GameContext'
import { useState, useEffect } from 'react'

export default function GamePage () {
  const params = useParams()
  const { getCardsGame } = useCards()

  const [canPlay, setCanPlay] = useState(false)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [timerOn, setTimerOn] = useState(false)

  useEffect(() => {
    getCardsGame(parseInt(params.gameId))
  }, [])

  return (
    <>
      <BoardGame canPlay={canPlay} setCanPlay={setCanPlay} timeElapsed={timeElapsed} setTimeElapsed={setTimeElapsed} timerOn={timerOn} setTimerOn={setTimerOn} />
    </>
  )
}
