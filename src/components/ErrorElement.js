import React from "react";

const ErrorElement = () => {
  return (
    <div className="text-center p-4 bg-red-100 border border-red-500 rounded-md my-4">
      <h1 className="text-red-700 text-xl mb-2">Oops! Something went wrong</h1>
      <p className="text-red-700">We encountered an error while processing your request.</p>
      {/* <img src="path/to/error-image.png" alt="Error" className="max-w-full w-auto mt-2" /> */}
    </div>
  );
};

export default ErrorElement;
