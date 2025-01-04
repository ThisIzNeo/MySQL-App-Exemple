
export const Footer = () => {
  return (
    <div className="flex justify-between bg-slate-50 w-full p-8 ">
      <p>
        All rights reserved <b>GM-top</b> - © Developed by{" "}
        <a className="text-purple-500" href="github.com/thisizneo">
          thisizneo
        </a>
      </p>
      <div>
        <ul className="flex space-x-5">
          <li>
            <a href="">insta</a>
          </li>
          <li>
            <a href="">X</a>
          </li>
          <li>
            <a href="">threads</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
