import Link from "next/link";
export default function NotFound() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      {/* Image Section */}
      <div className="w-full max-w-3xl mb-8">
        <img
          src="/15.jpeg" // Replace with your image path
          alt="404 Not Found"
          className="w-full"
        />
      </div>

      {/* Text Content */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        oops! The page you requested was not found!
      </h1>
      
      {/* Back to Home Button */}
      <Link
        href="/"
        className="px-6 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300"
      >
        Back To Home
      </Link>
    </div>
  );
}
