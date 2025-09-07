import React from "react";
const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-gray-800">
    <h1 className="text-6xl font-extrabold mb-4">404</h1>
    <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
    <p className="text-lg text-center mb-8">
      Oops! The page you are looking for doesn&apos;t exist or has been moved.
    </p>
    <Link
      to="/"
      className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition-colors"
    >
      Go back to Home
    </Link>
  </div>
);

export default NotFoundPage;
