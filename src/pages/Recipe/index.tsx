import React from "react";
import { useLocation } from "react-router-dom";
import RichTextComponent from "../../components/RichText";

const RecipePage: React.FC = () => {
  const location = useLocation();
  const { data } = location.state;

  return (
    <div className="flex flex-col lg:flex-row md:justify-between mb-20">
      <div className="flex flex-col md:mr-4 overflow-y-auto">
        <div>
          <button onClick={() => window.history.back()}>
            <svg
              width="79"
              height="79"
              viewBox="0 0 79 79"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.3606 39.4999C66.3606 54.3519 54.3526 66.3599 39.5006 66.3599C24.6486 66.3599 12.6406 54.3519 12.6406 39.4999C12.6406 24.6479 24.6486 12.6399 39.5006 12.6399C54.3526 12.6399 66.3606 24.6479 66.3606 39.4999ZM15.8006 39.4999C15.8006 52.6139 26.3866 63.1999 39.5006 63.1999C52.6146 63.1999 63.2006 52.6139 63.2006 39.4999C63.2006 26.3859 52.6146 15.7999 39.5006 15.7999C26.3866 15.7999 15.8006 26.3859 15.8006 39.4999Z"
                fill="#C8C8C8"
              />
              <path
                d="M42.1845 26.3857L29.0705 39.4997L42.1845 52.6137L39.9725 54.8257L24.6465 39.4997L39.9725 24.1737L42.1845 26.3857Z"
                fill="#C8C8C8"
              />
              <path
                d="M26.8594 41.0801L26.8594 37.9201L53.7194 37.9201L53.7194 41.0801L26.8594 41.0801Z"
                fill="#C8C8C8"
              />
            </svg>
          </button>
        </div>
        <div className="max-w-[100%] lg:max-w-[500px] mr-0 md:mr-20">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold">
            {data?.Name.toUpperCase()}
          </h2>
          <h3 className="mt-16 font-bold font-neutral-900 mb-5">RECETTE: </h3>
          <RichTextComponent richText={data?.Description} />
        </div>
      </div>
      <div>
        {data.Images.map((image: any) => (
          <img
            className="rounded-3xl object-cover h-[90vh] w-[90%] mb-5"
            alt="recipe-images"
            src={image.url}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
