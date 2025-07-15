// @ts-nocheck
import React from 'react';

const StudyGroupCard = ({ image, title, description }) => {
  return (
    <div className="w-28 h-28 flex flex-col items-center justify-center bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
      <img src={image} alt={title} className="w-6 h-6 mb-2" />
      <p className="text-sm font-medium text-gray-800">{description}</p>
    </div>
  );
};

export default StudyGroupCard;

// Example usage:
// <StudyGroupCard image="/path/to/image.png" title="Study Group" description="Join our study group!" />
