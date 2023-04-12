const Modal = ({
	children,
	state,
	changeState,
	title = 'Alerta',
}) => {
	return (
		<>
			{state && 
				<div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-25 p-20 flex justify-center`}>
					<div className={`w-80 h-40 bg-modal-gradient relative rounded-md shadow-md p-4 mx-4 flex flex-col items-center justify-center}`}>
                        <div className="flex items-center justify-between p-2">
                            <h3>{title}</h3>
                        </div>
						<button className="absolute top-2 right-2 w-30 h-30 border-none bg-transparent cursor-pointer transition-all duration-300 rounded-5 text-blue-500" onClick={() => changeState(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg>
						</button>
						{children}
					</div>
				</div>
			}
		</>
	);
}

export default Modal;