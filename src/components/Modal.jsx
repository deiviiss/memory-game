import PropTypes from 'prop-types'

const Modal = ({ children, open, title = 'Alerta' }) => {
  return (
    <>
      {open && (
        <div className="relative left-0 rigth-0 inset-y-1/2 w-screen h-screen flex justify-center p-20 bg-black bg-opacity-25">
          <div className="absolute w-3/4 h-1/2 flex flex-col items-center justify-between justify-items-center mx-4 p-8 bg-modal-gradient rounded-md border drop-shadow-md dark:bg-dark-modal-gradient dark:border-secondary">
            <div className="flex items-center px-2 ">
              <h3 className="text-4xl">{title}</h3>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

Modal.propTypes = {
  children: PropTypes.object,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  title: PropTypes.string
}

export default Modal
