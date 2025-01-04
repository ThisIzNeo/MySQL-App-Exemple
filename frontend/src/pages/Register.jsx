import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="bg-slate-950 h-screen w-full flex justify-center items-center">
      <div className="flex flex-col w-96 py-6 bg-white rounded-lg">
        <h1 className="text-2xl font-semibold text-center uppercase">
          Register
        </h1>

        <form
          action=""
          className="flex flex-col space-y-5 justify-center mt-10 px-5"
        >
          <label htmlFor="" className="font-medium">
            Username:
            <input
              type="text"
              placeholder="Jonah28"
              className="block mt-2 w-full focus:outline-sky-500 bg-slate-100 p-3 rounded-md"
            />
          </label>
          <label htmlFor="" className="font-medium">
            Email:
            <input
              type="email"
              placeholder="Jhonah28@email.com"
              className="block mt-2 w-full focus:outline-sky-500 bg-slate-100 p-3 rounded-md"
            />
          </label>
          <label htmlFor="" className="font-medium">
            Password:
            <input
              type="password"
              placeholder="********"
              className="block mt-2 w-full focus:outline-sky-500 bg-slate-100 p-3 rounded-md"
            />
          </label>
          <div>
            <p className="text-gray-400">
              Password should have 8 charcters or more
            </p>
            <p className="text-gray-400">Password should contain symbols</p>
            <p className="text-gray-400">Password should be strong</p>
          </div>
          <button
            type="submit"
            className="bg-green-700 p-3 rounded-md text-white hover:bg-green-900 active:scale-95 duration-300"
          >
            Register
          </button>
          <span>
            Alread you have an account?{" "}
            <a
              href="/register"
              className="text-blue-400 hover:text-blue-700 duration-300"
            >
              Login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};
