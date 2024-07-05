import React from 'react';
import { useLocation } from 'react-router-dom';

const RecipePage: React.FC = () => {
    const location = useLocation();
    const { title, data } = location.state;

    return (
        <div>
            <h2>{title}</h2>
            <p>{data}</p>
        </div>
    );
};

export default RecipePage;