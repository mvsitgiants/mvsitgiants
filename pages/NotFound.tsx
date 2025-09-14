
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-light text-center px-4">
      <h1 className="text-6xl font-extrabold text-accent">404</h1>
      <h2 className="text-3xl font-bold text-primary mt-4">Page Not Found</h2>
      <p className="text-muted mt-2 max-w-md">
        Sorry, the page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-accent text-light font-bold py-3 px-8 rounded-full hover:bg-accent/80 transition-all duration-300"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;