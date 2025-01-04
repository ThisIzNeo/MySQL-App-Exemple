import { BlogContent } from "../components/BlogContent";

export const Home = () => {
  return (
    <div className="min-h-screen h-fit">
      <div className="flex justify-between p-5 h-full">
        <div className="flex flex-col w-3/12 mx-1 h-fit p-3 bg-white rounded-lg max-md:hidden">
          No Details
        </div>
        <div className="flex flex-col w-6/12 mx-1 h-fit p-3 space-y-5 bg-white rounded-lg max-md:w-full">
          <BlogContent />
          <hr />
          <BlogContent />
        </div>
        <div className="flex flex-col w-3/12 mx-1 h-fit p-3 bg-white rounded-lg max-md:hidden">
          No Friends requests
        </div>
      </div>
    </div>
  );
};
