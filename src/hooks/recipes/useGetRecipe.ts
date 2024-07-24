// src/hooks/recipes/useGetRecipeById.ts
import { useQuery } from "react-query";

const fetchRecipeById = async (id: string): Promise<any> => {
  try {
    const config = {
      base: process.env.REACT_APP_AIRTABLE_BASE,
      table: process.env.REACT_APP_AIRTABLE_TABLE,
      apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
      baseUrl: process.env.REACT_APP_BASE_URL,
    };
    const response = await fetch(
      `${config.baseUrl}${config.base}/${config.table}/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching recipe:", error);
    throw error;
  }
};

export const useGetRecipeById = (id: string) => {
  return useQuery<any, Error>({
    queryKey: ["recipe", id],
    queryFn: () => fetchRecipeById(id),
  });
};
