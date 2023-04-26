import { Link } from 'react-router-dom'

export default function LoginPage () {
    return (
      <div className="flex w-screen text-secondary overflow-hidden">
        <div className="flex flex-col justify-evenly bg-secondary-gradient h-auto w-full my-8 mx-4 rounded-md">
            <Link to="/signup" className="flex justify-end text-xl pt-4 pr-2">Don't have an account? Sign up!</Link>
            <div className="flex flex-col items-center space-y-2">
                <h4 className="text-4xl font-bold">Login To Your Account</h4>
                <form className="flex flex-col space-y-1 w-full items-center">
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="email" placeholder="Email"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="password" placeholder="Password"/>        
                    <input className="bg-modal-gradient w-3/4 h-12 rounded-lg text-primary border border-primary" type="submit" value="Log In"/>   
                </form>
                <div className="flex justify-around text-xl w-full px-2 py-2">
                    <div className="w-1/2 space-x-1">
                        <input type="checkbox" id="remember" name="remember" />
                        <span>Remember Me</span>
                    </div>
                    <a className="w-1/2">Forgot your password?</a>    
                </div>
            </div>
            <div className="flex flex-col w-full items-center space-y-1 pb-4">
                <a className="flex justify-around items-center h-12 w-3/4 bg-red-600 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-google" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path></svg><span>Sign in with Google</span></a>
                <a className="flex justify-around items-center h-12 w-3/4 bg-cyan-500 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter-filled" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z" strokeWidth={0} fill="currentColor"></path> </svg><span>Sign in with Twitter</span></a>
                <a className="flex justify-around items-center h-12 w-3/4 bg-blue-700 rounded-lg"><svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-meta" width={24} height={24} viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"></path> <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"></path> </svg><span>Sign in with Meta</span></a>
            </div>
        </div>
      </div>
    )
}