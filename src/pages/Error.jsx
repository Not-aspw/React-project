import { Link } from "react-router";

function Error() {
  return (
    <>
      <div className="flex grow flex-col items-center justify-center">
        <h2 className="text-5xl font-bold lg:text-6xl">404</h2>
        <p className="my-4 lg:text-xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/" className="rounded-md bg-blue-400 px-4 py-2 text-white hover:bg-blue-500 lg:text-xl">
          Go Back Home
        </Link>
      </div>
    </>
  );
}

export default Error;
