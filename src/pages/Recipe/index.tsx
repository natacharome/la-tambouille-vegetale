import React from "react";
import ReactMarkdown from "react-markdown";
import { useLocation } from "react-router-dom";
import remarkGfm from "remark-gfm";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const { data } = location.state;

  const texteFormate = data?.Test.replace(/\\/g, "").replace(/- /g, "- ");
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
      <div className="recipe-data">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {texteFormate}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default RecipePage;
