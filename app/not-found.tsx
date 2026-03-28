import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <Image
        src="https://www.krmangalam.edu.in/_next/image?url=%2FKRMU-Logo-NAAC.webp&w=384&q=75"
        width={200}
        height={80}
        alt="K.R. Mangalam University Logo"
        className="mb-8"
      />

      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-md">
        The page you are looking for might have been moved or does not exist.
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-red-600 text-white font-medium rounded hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}