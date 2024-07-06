import React from "react";
import "./Card.css";
import { CardProps } from "./card.interface";
import { useNavigate } from "react-router-dom";

const Card: React.FC<CardProps> = ({ id, data }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${id}`, { state: { id, data } });
  };
  const imageUrl = data.properties.Images.files[0]?.file?.url;

  return (
    <>
      <div className="card" onClick={handleClick}>
        {imageUrl ? (
          <img src={imageUrl} alt="Card" className="card-img" />
        ) : (
          <img alt="Card" className="card-img" />
        )}
      </div>
    </>
  );
};

export default Card;
