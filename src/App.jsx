import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamePage from './pages/GamePage'
import NotFoundPage from './pages/NotFoundPage'
import { ProviderGame } from './context/GameContext'

export default function App () {
  return (
      <div className='text-3xl h-full'>
        <ProviderGame>
            <BrowserRouter>

            <Navbar/>

                <Routes>
                    <Route element={<HomePage />} path="/"/>
                    <Route element={<GamesPage />} path="/games/*">
                      {/* Pagina dentro de pagina */}
                      {/* <Route element={<h1>Tablero</h1>} path="ricky"/>  */}
                    </ Route>
                    <Route element={<GamePage />} path="/games/:gameId"/>
                    <Route element={<NotFoundPage />} path="*"/>
                </Routes>
          </BrowserRouter>
          </ProviderGame>
      </div>
  )
}
