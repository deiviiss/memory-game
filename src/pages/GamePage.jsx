// import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import BoardGame from '../components/BoardGame'
// import { GameContext } from '../context/GameContext'

export default function GamePage () {
  const params = useParams()
  console.log(params)
  return (
    <>
      <h1>Game Page</h1>
      <button>CardLink Level</button>
      <button>CardLink Timer</button>
      <BoardGame/>
      <button>CardLink Score</button><button>CardLink Attempts</button>
</>

  )
}
