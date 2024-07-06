import React from "react";
import { CardProps } from "./card.interface";
import { useNavigate } from "react-router-dom";

const Card: React.FC<CardProps> = ({ id, data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`, { state: { id, data } });
  };
  const imageUrl = data?.Images ? data?.Images[0].url : false;
  return (
    <>
      <div className="cursor-pointer rounded-md m-4" onClick={handleClick}>
        <img src={imageUrl} alt="Card" className="max-w-xs transition duration-500 ease-in-out hover:scale-105 object-cover w-80 h-80 rounded-md" />
      </div>
    </>
  );
};

export default Card;
