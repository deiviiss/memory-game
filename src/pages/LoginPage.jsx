import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="w-screen h-full flex justify-center items-center text-secondary overflow-hidden md:pt-12">
      <div className="w-full h-auto flex flex-col justify-evenly my-8 mx-4 p-4 bg-secondary-gradient rounded-md md:flex-row lg:text-4xl">
        <div className="md:w-1/2 md:space-y-4">
          <Link
            to="/signup"
            className="flex justify-end pt-4 pr-2 text-xl pb-2 hover:underline md:justify-start md:p-0 lg:text-2xl"
          >
            Don&apos;t have an account? Sign up!
          </Link>
          <div className="flex flex-col items-center space-y-2 lg:space-y-4">
            <h4 className="font-bold lg:text-5xl">Login To Your Account</h4>
            <form className="w-full flex flex-col items-center space-y-1 lg:space-y-2">
              <input
                className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-3/4 text-2xl text-center rounded-sm lg:text-3xl"
                type="password"
                placeholder="Password"
              />
              <input
                className="w-3/4 h-full text-primary p-2 bg-modal-gradient border border-primary rounded-lg cursor-pointer opacity-90 hover:opacity-100"
                type="submit"
                value="Log In"
              />
            </form>
            <div className="w-full flex flex-col justify-around items-center py-2 text-xl xs:flex-row lg:text-2xl">
              <div className="w-full flex justify-center items-center space-x-1 xs:w-1/2">
                <input
                  type="checkbox"
                  id="remember"
                  name="remember"
                  className="w-4 h-4 checked:bg-modal-gradient"
                />
                <span className="text-center cursor-pointer hover:underline">Remember Me</span>
              </div>
              <a className="w-full text-center cursor-pointer whitespace-nowrap hover:underline xs:w-1/2">Forgot your password?</a>
            </div>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col justify-center items-center pt-2 space-y-2 md:w-1/2 md:space-y-4">
          <a className="flex justify-around items-center h-12 w-full bg-red-600 border border-primary rounded-lg opacity-90 cursor-pointer hover:opacity-100 lg:h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-google w-6 h-6 lg:w-8 lg:h-8 "
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
              <path d="M17.788 5.108a9 9 0 1 0 3.212 6.892h-8"></path>
            </svg>
            <span className="whitespace-nowrap">Sign in with Google</span>
          </a>
          <a className="flex justify-around items-center h-12 w-full bg-cyan-500 border border-primary rounded-lg opacity-90 cursor-pointer hover:opacity-100 lg:h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-twitter-filled w-6 h-6 lg:w-8 lg:h-8"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
              <path
                d="M14.058 3.41c-1.807 .767 -2.995 2.453 -3.056 4.38l-.002 .182l-.243 -.023c-2.392 -.269 -4.498 -1.512 -5.944 -3.531a1 1 0 0 0 -1.685 .092l-.097 .186l-.049 .099c-.719 1.485 -1.19 3.29 -1.017 5.203l.03 .273c.283 2.263 1.5 4.215 3.779 5.679l.173 .107l-.081 .043c-1.315 .663 -2.518 .952 -3.827 .9c-1.056 -.04 -1.446 1.372 -.518 1.878c3.598 1.961 7.461 2.566 10.792 1.6c4.06 -1.18 7.152 -4.223 8.335 -8.433l.127 -.495c.238 -.993 .372 -2.006 .401 -3.024l.003 -.332l.393 -.779l.44 -.862l.214 -.434l.118 -.247c.265 -.565 .456 -1.033 .574 -1.43l.014 -.056l.008 -.018c.22 -.593 -.166 -1.358 -.941 -1.358l-.122 .007a.997 .997 0 0 0 -.231 .057l-.086 .038a7.46 7.46 0 0 1 -.88 .36l-.356 .115l-.271 .08l-.772 .214c-1.336 -1.118 -3.144 -1.254 -5.012 -.554l-.211 .084z"
                strokeWidth={0}
                fill="currentColor"
              ></path>{" "}
            </svg>
            <span className="whitespace-nowrap">Sign in with Twitter</span>
          </a>
          <a className="flex justify-around items-center h-12 w-full bg-blue-700 border border-primary rounded-lg opacity-90 cursor-pointer hover:opacity-100 lg:h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-meta w-6 h-6 lg:w-8 lg:h-8"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>{" "}
              <path d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"></path>{" "}
              <path d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"></path>{" "}
            </svg>
            <span className="whitespace-nowrap">Sign in with Meta</span>
          </a>
        </div>
      </div>
    </div>
  );
}
