import React from "react";

const PatientList = ({ props }) => {
  const { fullName, email, phone, date, time,message} = props;

  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition duration-300">
      <div className="text-gray-800 font-semibold text-lg mb-4">Patient Details</div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24">Name:</span>
          <span>{fullName}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24">Email:</span>
          <span>{email}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24">Phone:</span>
          <span>{phone}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24">Date:</span>
          <span>{date}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24">Time:</span>
          <span>{time}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-700 border-b border-gray-200 pb-2">
          <span className="font-semibold w-24"> Message: </span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default PatientList;
