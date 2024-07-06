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
      <div className=" rounded-md m-4" onClick={handleClick}>
        <img src={imageUrl} alt="Card" className="object-cover object-cover w-80 h-80 rounded-md" />
      </div>
    </>
  );
};

export default Card;
