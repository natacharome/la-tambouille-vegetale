import {useQuery} from "react-query";

const QUERY_KEY = ['recipes'];

const fetchRecipes = async (): Promise<any[]> => {
    try {
        const response = await fetch(`https://la-tambouille-vegetale.netlify.app/.netlify/functions/notion`);
        const data = await response.json();
        console.log(data.results.filter((x: any) => x.properties.Name.title.length > 0), "data");
        return data.results.filter((recipe: any) => recipe.properties.Name.title.length > 0).map((recipe: any) => ({
            id: recipe.id,
            properties: recipe.properties
        }));
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return [];
    }
};


export const useGetRecipes = () => {
    return useQuery<any[], Error>({queryKey: QUERY_KEY, queryFn: () => fetchRecipes()})
}