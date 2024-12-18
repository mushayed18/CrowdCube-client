import React from "react";

const MyDonation = ({ myDonation }) => {
  const { thumbnail, title, type } = myDonation;

  return (
    <div className="w-72 rounded-lg overflow-hidden border">
      <div className="w-72 h-48">
        <img src={thumbnail} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>
          Type: <span className="font-medium capitalize">{type}</span>
        </p>
      </div>
    </div>
  );
};

export default MyDonation;
