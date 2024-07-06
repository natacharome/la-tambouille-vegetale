import React from "react";
import { useLocation } from "react-router-dom";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const { id, data } = location.state;
  console.log(data.properties.Description);
  const hasDescription = data.properties.Description.rich_text?.length > 0;
  console.log(hasDescription);
  return (
    <>
      <button onClick={() => window.history.back()}>GO BACK</button>
      <div>
        <h2>{id}</h2>
        {hasDescription ? (
            <div>
                <p>{data.properties.Description.rich_text[0].text.content}</p>
                <p>{data.properties.Description.rich_text[1].text.content}</p>
            </div>
        
        ) : (
           <p>Au revoir</p>
        )}
      </div>
    </>
  );
};

export default RecipePage;
