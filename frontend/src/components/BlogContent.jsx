export const BlogContent = () => {
  const access = false;

  return (
    <div className="flex flex-col p-2 w-full border-2 border-slate-50 rounded-md">
      <div className="flex justify-between ">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-slate-200 rounded-full">
            <img
              src="/images/avatar.jpg"
              className="object-cover h-full rounded-full"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col justify-center ml-2">
            <p className=" font-semibold">@BearGamer</p>
            <p className="text-slate-400">12:38 pm - 04/01/2025</p>
          </div>
        </div>
        <div className="h-8 w-8 bg-slate-100 rounded-full">
          {access ? (
            <img
              src="/images/trash-outline.svg"
              className="h-full p-2 cursor-pointer active:scale-90 hover:bg-red-200 hover:shadow-md hover:shadow-red-200 duration-300 hover:rounded-full"
              alt=""
            />
          ) : (
            <img
              src="/images/share-social-outline.svg"
              className="h-full p-2 cursor-pointer active:scale-90 hover:bg-purple-100 hover:shadow-md hover:shadow-purple-200 duration-300 hover:rounded-full"
              alt=""
            />
          )}
        </div>
      </div>
      <div>
        <div className="p-5 lb-">
          <img src="/images/game.jpg" className="w-full mb-2" alt="post" />
          <div className="flex py-2 space-x-3 sm:py-1 sm:text-sm">
            <div className="p-2 px-4 bg-purple-100 hover:bg-purple-200 duration-300 cursor-pointer max-sm:p-1 max-sm:px-2 max-sm:text-sm shadow-md shadow-purple-100 rounded-full">
              #Gtav
            </div>
            <div className="p-2 px-4 bg-purple-100 hover:bg-purple-200 duration-300 cursor-pointer max-sm:p-1 max-sm:px-2 max-sm:text-sm shadow-md shadow-purple-100 rounded-full">
              #Games
            </div>
            <div className="p-2 px-4 bg-purple-100 hover:bg-purple-200 duration-300 cursor-pointer max-sm:p-1 max-sm:px-2 max-sm:text-sm shadow-md shadow-purple-100 rounded-full">
              #Upcoming
            </div>
          </div>
          <p>
            While <b>2024</b> isn't over yet, and still has a fair share of
            surprises in store, it's fair to say that <b>2025</b> is also
            shaping to be a promising year, with a release schedule growing more
            packed by the month.
          </p>
        </div>
      </div>
      <hr />
      <div className="flex space-x-5 mt-2 p-2 items-center">
        <div className="flex items-center">
          <img
            src="/images/heart-outline.svg"
            className="h-5 mr-1"
            alt="like"
          />{" "}
          36
        </div>
        <div className="flex items-center">
          <img src="/images/comment.svg" className="h-5 mr-1" alt="comment" /> 6
        </div>
      </div>
      <div></div>
    </div>
  );
};
