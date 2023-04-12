import { useParams } from 'react-router-dom'
//! change to relative paths ../ to src/ (next commit)
import BoardGame from '../components/BoardGame'
import CardBoard from '../components/CardBoard'
import Modal from '../components/Modal';
import { useCards } from '../context/GameContext'
import { useState } from 'react'

export default function GamePage () {
  const params = useParams()
  const { currentLevel, move } = useCards()

  const [clickedStart, setClickedStart] = useState(false)

  const [modalState1, changeModalState1] = useState(false);
	const [modalState2, changeModalState2] = useState(false);
	const [modalState3, changeModalState3] = useState(false);

  return (
    <>
      <BoardGame gameId={parseInt(params.gameId)} clickedStart = {clickedStart} setClickedStart={setClickedStart}/>

      <div className={`flex w-full flex-row justify-around items-center mb-3 fixed bottom-0 left-0 bg-secondary-gradient bg-no-repeat ${clickedStart ? '' : 'hidden'}`}>
        {/* level */}
        <CardBoard name={'Lvl'} data={currentLevel} />
        {/* timer */}
        <CardBoard name={'Timer'} data={'00:00'}/>

        {/* score */}
        <CardBoard name={'Moves'} data={move}/>
        {/* attempts */}
      </div>

      <div>
        <div className='p-10 flex flex-wrap justify-center'>
          <button className="block px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeModalState1(!modalState1)}>Modal Start</button>
          <button className="block px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeModalState2(!modalState2)}>Modal Continue</button>
          <button className="block px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeModalState3(!modalState3)}>Modal Retry</button>
        </div>

        {/* Modal start, this one stays here */}
        <Modal
          state={modalState1}
          changeState={changeModalState1}
          title="Let's play!"
        >
          <div className='flex items-center my-4'>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal1(!stateModal1)}>Go home</button>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal1(!stateModal1)}>Start</button>
          </div>
        </Modal>

        {/* Modal to continue */}
        <Modal
          state={modalState2}
          changeState={changeModalState2}
          title="Ready for next level?"
        >
          <div className='flex items-center'>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal2(!stateModal2)}>Go home</button>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal2(!stateModal2)}>Continue</button>
          </div>
        </Modal>

        {/* Retry modal */}
        <Modal
          state={modalState3}
          changeState={changeModalState3}
          title="Sorry, you lost"
        >
          <div className='flex  items-center'>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal3(!stateModal3)}>Go home</button>
            <button className="px-10 py-2 rounded-full text-secondary border-none bg-secondary-gradient cursor-pointer font-roboto transition duration-300 ease-in-out hover:bg-blue-700" onClick={() => changeStateModal3(!stateModal3)}>Retry</button>
          </div>
        </Modal>
		  </div>
</>
  )
}
