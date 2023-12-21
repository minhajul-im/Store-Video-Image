import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="absolute w-full flex justify-between items-center z-50 px-4 py-2">
      <Link to={"/"} className="text-3xl font-bold font-mono text-red-600">
        Like-YouTube
      </Link>
      <div className="flex gap-4 items-center">
        <button className="py-2 px-4 text-white text-sm hover:bg-gray-900 rounded-md">
          Log in
        </button>
        <button className="py-2 px-4 bg-red-600 text-white text-sm rounded-md hover:bg-red-800">
          Sign up
        </button>
      </div>
    </nav>
  );
}
