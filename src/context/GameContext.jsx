import PropTypes from 'prop-types'
import { useState, createContext, useContext } from 'react'

import { getGameRequest } from '../services/api/gameRequests'

const GameContext = createContext()

export const useCards = () => {
  const context = useContext(GameContext)

  return context
}

export const ProviderGame = ({ children }) => {
  const [cardsGame, setCardsGame] = useState()
  const [currentLevel, setCurrentLevel] = useState(2)
  const [usedCards, setUsedCards] = useState([])
  const [avoidCards, setAvoidCards] = useState([0, 1])

  const getCardsGame = async (gameId) => {
    const rta = await getGameRequest(gameId)
    setCardsGame(rta)
  }

  return (
    <GameContext.Provider value={{
      getCardsGame,
      cardsGame,
      setCardsGame,
      currentLevel,
      setCurrentLevel,
      usedCards,
      setUsedCards,
      avoidCards,
      setAvoidCards
    }}>
      {children}
    </GameContext.Provider>
  )
}

ProviderGame.propTypes = {
  children: PropTypes.object.isRequired
}
