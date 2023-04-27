import PropTypes from 'prop-types'

const Modal = ({ children, state, changeState, title = 'Alerta' }) => {
  return (
    <>
    {state &&
      <div className={'relative left-0 rigth-0 inset-y-1/2 w-screen h-screen bg-black bg-opacity-25 p-20 flex justify-center'}>
        <div className={'w-3/4 h-1/2 bg-modal-gradient absolute rounded-md shadow-md p-8 mx-4 flex flex-col items-center justify-between justify-items-center}'}>
                        <div className="flex items-center px-2 ">
                            <h3 className="text-4xl">{title}</h3>
                        </div>
<button className="absolute top-2 right-2 w-30 h-30 border-none bg-transparent cursor-pointer transition-all duration-300 rounded-5 text-blue-500" onClick={() => changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
</button>
{children}
</div>
</div>
}
</>
  )
}

Modal.propTypes = {
  children: PropTypes.object,
  state: PropTypes.bool,
  changeState: PropTypes.func,
  title: PropTypes.string
}

export default Modal
