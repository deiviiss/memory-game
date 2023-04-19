import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import GamesPage from './pages/GamesPage'
import GamePage from './pages/GamePage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { ProviderGame } from './context/GameContext'

export default function App () {
  return (
      <div className='text-3xl h-full w-screen'>
        <ProviderGame>
            <BrowserRouter>

            <Navbar/>

                <Routes>
                    <Route element={<HomePage />} path="/"/>
                    <Route element={<GamesPage />} path="/games/*"/>
                    <Route element={<GamePage />} path="/games/:gameId"/>
                    <Route element={<NotFoundPage />} path="*"/>
                    <Route element={<LoginPage />} path="/login/*"/>
                    <Route element={<SignupPage />} path="/signup/*"/>
                </Routes>
          </BrowserRouter>
          </ProviderGame>
      </div>
  )
}
