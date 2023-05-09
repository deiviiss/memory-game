import { useParams } from 'react-router-dom'
//! change to relative paths ../ to src/ (next commit)
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'
import { useCards } from '../context/GameContext'
import { useState, useEffect } from 'react'

export default function GamePage () {
  const params = useParams()
  const { getCardsGame, currentLevel, move } = useCards()

  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    getCardsGame(parseInt(params.gameId))
  }, [])

  return (
    <>
      <BoardGame canPlay = {canPlay} setCanPlay={setCanPlay}/>

      <div className={`fixed bottom-0 left-0 w-full flex flex-row justify-around items-center mb-3 bg-secondary-gradient bg-no-repeat ${canPlay ? '' : 'hidden'}`}>
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
