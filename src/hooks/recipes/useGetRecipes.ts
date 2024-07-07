import { useQuery } from "react-query";

const QUERY_KEY = ["recipes"];

const fetchRecipes = async (): Promise<any[]> => {
  try {
    const config = {
      base: process.env.REACT_APP_AIRTABLE_BASE,
      table: process.env.REACT_APP_AIRTABLE_TABLE,
      apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
      baseUrl: process.env.REACT_APP_BASE_URL,
    };
    const response = await fetch(
      `${config.baseUrl}${config.base}/${config.table}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.apiKey}`,
        },
      }
    );
    const data = await response.json();
    return data.records.sort(
      (a: any, b: any) =>
        new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    );
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};

export const useGetRecipes = () => {
  return useQuery<any[], Error>({
    queryKey: QUERY_KEY,
    queryFn: () => fetchRecipes(),
  });
};
