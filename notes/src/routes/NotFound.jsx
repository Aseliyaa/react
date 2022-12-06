import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center my-56">
      <h1 className="text-5xl text-stone-800">404</h1>
      <h1 className="text-6xl text-stone-900">Page Not Found</h1>
      <p className="text-3xl text-stone-500 mt-4">
        Go
        <Link
          className="underline hover:text-blue-600 ml-1"
          to="/about"
        >Home
        </Link>
      </p>
    </div>
  );
}