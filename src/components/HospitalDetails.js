import React from "react";

const HospitalDetails = (props) => {
  const { name, address, contactInfo, beds } = props;
  const imgArray=["https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg","https://images.pexels.com/photos/1692693/pexels-photo-1692693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","https://media.gettyimages.com/id/1312706413/photo/modern-hospital-building.jpg?s=2048x2048&w=gi&k=20&c=2vk6X1Ais7xks0W5i-oBkL_I9EUEZwznPY9lhgRYgog=","https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg","https://thumbs.dreamstime.com/z/pondicherry-hospital-india-june-documetary-editorial-jipmer-full-documentary-patient-their-family-children-72532127.jpg?ct=jpeg"]
  const idx = Math.floor(Math.random() * imgArray.length);
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white m-4">
      <img className="w-full h-40 object-cover" src={imgArray[idx]} alt="Hospital" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{name}</div>
        <p className="text-gray-600 text-base mb-2">{address}</p>
        <p className="text-gray-600 text-base mb-2">Beds Availability: {beds}</p>
        <p className="text-gray-600 text-base">Contact: {contactInfo}</p>
      </div>
    </div>
  );
};

export default HospitalDetails;
