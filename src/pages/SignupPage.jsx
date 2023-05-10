import { Link } from 'react-router-dom'

export default function SignupPage () {
  return (
      <div className="w-screen flex text-secondary overflow-hidden">
        <div className="w-full h-96 flex flex-col justify-evenly my-8 mx-4 bg-secondary-gradient rounded-md">
            <div className="flex flex-col items-center space-y-2">
                <h4 className="pb-2 text-4xl font-bold lg:text-5xl">Create Your Account</h4>
                <form className="w-full flex flex-col items-center text-primary space-y-1 lg:space-y-3">
                    <input className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"type="text" placeholder="Nickname"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"type="email" placeholder="Email"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"type="password" placeholder="Password"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"type="password" placeholder="Confirm password"/>
                    <input className="w-3/4 h-12 bg-modal-gradient text-primary border border-primary rounded-lg cursor-pointer opacity-90 hover:opacity-100" type="submit" value="Sign Up"/>
                </form>
                <div className="w-full flex justify-around px-2 pt-2 text-2xl ">
                    <Link to="/login" className="w-full flex justify-end pr-2 cursor-pointer hover:underline">Do you have an account? Log in!</Link>
                </div>
            </div>
          </div>
      </div>
  )
}
