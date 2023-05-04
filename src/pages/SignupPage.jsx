import { Link } from 'react-router-dom'

export default function SignupPage () {
  return (
      <div className="flex w-screen text-secondary overflow-hidden">
        <div className="flex flex-col justify-evenly bg-secondary-gradient h-96 w-full my-8 mx-4 rounded-md">
            <div className="flex flex-col items-center space-y-2">
                <h4 className="text-4xl font-bold pb-2">Create Your Account</h4>
                <form className="flex flex-col space-y-1 w-full items-center">
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="text" placeholder="Nickname"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="email" placeholder="Email"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="password" placeholder="Password"/>
                    <input className="w-3/4 text-2xl text-center rounded-sm"type="password" placeholder="Confirm password"/>
                    <input className="bg-modal-gradient w-3/4 h-12 rounded-lg text-primary border border-primary" type="submit" value="Sign Up"/>
                </form>
                <div className="flex justify-around text-2xl w-full px-2 pt-2">
                    <Link to="/login" className="w-full flex justify-end">Do you have an account? Log in!</Link>
                </div>
            </div>
          </div>
      </div>
  )
}
