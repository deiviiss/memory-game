import PropTypes from 'prop-types'
import { useState, createContext } from 'react'

import { getGameRequest } from '../services/api/gameRequests'

export const GameContext = createContext()

export const ProviderGame = ({ children }) => {
  const [cardsGame, setCardsGame] = useState()

  const getCardsGame = async (gameId) => {
    const rta = await getGameRequest(gameId)

    return rta
  }

  return (
    <GameContext.Provider value={{
      getCardsGame
    }}>
      {children}
    </GameContext.Provider>
  )
}

ProviderGame.propTypes = {
  children: PropTypes.object.isRequired
}
