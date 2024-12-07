import { Link } from "react-router-dom";


const ErrorPage = () => {
      return (
            <div className=" h-[100vh] w-full flex justify-center items-center ">
                   <div className=" w-fit h-fit flex flex-col items-center justify-center">
                        <h1 className=" text-6xl md:text-9xl font-bold">404</h1>
                        <h2 className=" text-gray-400 font-light text-2xl my-2">Page not found</h2>
                        <Link className=" btn bg-bgbton text-white" to={'/'}>Back to home</Link>
                   </div>
            </div>
      );
};

export default ErrorPage;