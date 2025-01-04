import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="bg-slate-950 h-screen w-full flex justify-center items-center">
      <div className="flex flex-col w-96 py-6 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold text-center uppercase">Login</h1>

        <form
          action=""
          className="flex flex-col space-y-5 justify-center mt-10 px-5"
        >
          <label htmlFor="" className="font-medium">
            Username:
            <input
              type="text"
              className="block mt-2 w-full focus:outline-sky-500 bg-slate-100 p-3 rounded-md"
            />
          </label>
          <label htmlFor="" className="font-medium">
            Password:
            <input
              type="password"
              className="block mt-2 w-full focus:outline-sky-500 bg-slate-100 p-3 rounded-md"
            />
          </label>
          <p className="text-red-500">An Error</p>
          <button
            type="submit"
            className="bg-green-700 p-3 rounded-md text-white hover:bg-green-900 active:scale-95 duration-300"
          >
            Login
          </button>
          <span>
            You don't have an account?{" "}
            <a
              href="/register"
              className="text-blue-400 hover:text-blue-700 duration-300"
            >
              Create One
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};
