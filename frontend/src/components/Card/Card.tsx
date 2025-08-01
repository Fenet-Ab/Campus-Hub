import React from "react";
import './Card.css';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onClick }) => {
  return (
    <div>
       <div className="bg-white rounded-xl shadow-md overflow-hidden w-82 h-110 max-w-sm transition-transform hover:scale-105 duration-300 card flex flex-col">
        <img src={image} alt={title} className="w-full h-48 object-cover" />

        <div className="p-6 flex flex-col flex-1">
          <h2 className="text-xl font-bold text-orange-400 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4 flex-1">{description}</p>
          {buttonText && (
            <button 
              onClick={onClick}
              className="bg-orange-600 text-white w-full px-4 py-2 items-center rounded-lg hover:bg-orange-700 transition duration-300 mt-auto"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card; 