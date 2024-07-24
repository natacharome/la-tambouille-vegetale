import React from "react";
import { useParams } from "react-router-dom";
import RichTextComponent from "../../components/RichText";
import { useGetRecipeById } from "../../hooks/recipes/useGetRecipe";

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useGetRecipeById(id || "");

  return isLoading ? (
    <div role="status" className="flex justify-center items-center mt-20">
      <svg
        aria-hidden="true"
        className="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-300 fill-primary"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  ) : (
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
        <div className="mr-0 md:mr-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
            {data?.fields?.Name.toUpperCase()}
          </h2>
          <h3 className="mt-16 font-bold text-neutral-900 mb-5">RECETTE: </h3>
          <RichTextComponent richText={data?.fields?.Description} />
        </div>
      </div>
      <div>
        {data?.fields?.Images.map((image: any, index: number) => (
          <img
            key={index}
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
