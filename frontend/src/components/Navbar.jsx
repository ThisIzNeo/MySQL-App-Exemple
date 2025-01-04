import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-white px-10 mx-auto py-5 flex justify-between items-center">
      <div className="logo ">
        <a href="/">
          <img src="/vite.svg" alt="logo" className="cursor-pointer" />
        </a>
      </div>
      <div className="nav max-md:hidden">
        <ul className="flex space-x-10">
          <li>
            <a className="hover:text-purple-500 duration-300" href="#">
              Games
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500 duration-300" href="#">
              Upcoming
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500 duration-300" href="#">
              Vote
            </a>
          </li>
          <li>
            <a className="hover:text-purple-500 duration-300" href="#">
              News
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="bg-black text-white p-3 rounded-md hover:opacity-75 duration-300 active:scale-95"
            >
              Try Now
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden max-md:flex items-center space-x-5 ">
        <div className="bg-slate-50 rounded-full p-1 cursor-pointer">
          <img src="/images/dark.svg" alt="dark" />
        </div>
        <div>
          <img
            src="/images/menu.png"
            alt="menu"
            className="h-10 cursor-pointer"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full bg-white h-full hidden">
        <div className="nav">
          <div>
            {/* closing button to edit */}
            <img
              src="/images/close.png"
              alt="close"
              className="h-10 absolute top-3 right-3 cursor-pointer"
            />
          </div>
          <ul className="flex space-y-10 mt-10 flex-col items-center">
            <li>
              <a href="/">
                <img src="/vite.svg" alt="logo" />
              </a>
            </li>
            <li>
              <a className="hover:text-purple-500 duration-300" href="#">
                Games
              </a>
            </li>
            <li>
              <a className="hover:text-purple-500 duration-300" href="#">
                Upcoming
              </a>
            </li>
            <li>
              <a className="hover:text-purple-500 duration-300" href="#">
                Vote
              </a>
            </li>
            <li>
              <a className="hover:text-purple-500 duration-300" href="#">
                News
              </a>
            </li>
          </ul>
          <a
            href="/login"
            className="flex justify-center mt-10 mx-auto bg-black text-white w-5/6 rounded-md p-3 hover:opacity-80 duration-300 active:scale-95"
          >
            Login
          </a>
        </div>
      </div>
    </div>
  );
};
