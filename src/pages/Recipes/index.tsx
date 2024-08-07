import React, { useState, useEffect } from "react";
import { useGetRecipes } from "../../hooks/recipes/useGetRecipes";
import Card from "../../components/Card";
import Header from "../../components/Header";

type Recipe = {
  id: string;
  fields: {
    Name: string;
    Labels: string[];
    [key: string]: any;
  };
};

const Recipes: React.FC = () => {
  const { data, isLoading } = useGetRecipes();
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");

  useEffect(() => {
    if (data) {
      setRecipes(data);
    }
  }, [data]);

  const extractUniqueLabels = (data: any) => {
    let uniqueLabels = new Set();

    data?.forEach((item: any) => {
      if (item.fields && item.fields.Labels) {
        item.fields.Labels.forEach((label: any) => {
          uniqueLabels.add(label);
        });
      }
    });
    return Array.from(uniqueLabels);
  };

  let tags = extractUniqueLabels(data);

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    if (tag === "Tout voir") {
      setRecipes(data || []);
    } else {
      setRecipes(
        data?.filter(
          (recipe: Recipe) =>
            recipe.fields.Labels && recipe.fields.Labels.includes(tag)
        ) || []
      );
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap justify-center mt-32 space-x-4">
        <button
          onClick={() => handleTagClick("Tout voir")}
          type="button"
          className={`text-white bg-emerald-800 hover:bg-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-primary dark:hover:bg-emerald-800 focus:outline-none dark:focus:ring-yellow-400 ${
            selectedTag === "Tout voir" ? "bg-blue-800" : ""
          }`}
        >
          Tout voir
        </button>
        {tags.map((tag: any) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            type="button"
            className={`text-primary border-2	 focus:outline-none border-cyan-950 hover:bg-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ${
              selectedTag === tag ? "bg-yellow-300" : ""
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap mt-16 justify-center">
        {isLoading ? (
          <div role="status" className="mt-20">
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
        ) : recipes.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            Pas de résultat pour cette recherche
          </p>
        ) : (
          recipes.map((recipe, index) => (
            <Card id={recipe.id} key={index} data={recipe.fields} />
          ))
        )}
      </div>
    </>
  );
};

export default Recipes;
