import React from 'react';
import './Card.css';
import { CardProps } from './card.interface';
import { useNavigate } from "react-router-dom";



const Card: React.FC<CardProps> = ({ img, id, title, data }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${id}`, { state: { title, data } });
    };

    return (
        <div className="card" onClick={handleClick}>
            <img src={img} alt="Card" className="card-img" />
        </div>
    );
};

export default Card;
