import React from "react";
import { useLocation } from "react-router-dom";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="recipe-container">
      <div className="title-container">
        <div className="title">
          <div>
            <button onClick={() => window.history.back()}>GO BACK</button>
          </div>
          <h2>{data?.Name}</h2>
        </div>
        <div className="image-container">
          <img src={data.Images[0].url} />
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
