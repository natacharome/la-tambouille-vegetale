import {useQuery} from "react-query";

const QUERY_KEY = ['recipes'];

const fetchRecipes = async (): Promise<any[]> => {
    try {
        const response = await fetch(`https://la-tambouille-vegetale.netlify.app/.netlify/functions/notion`);
        const data = await response.json();
        console.log(data.results);
        return data.results;
    } catch (error) {
        console.error("Error fetching gift cards:", error);
        return [];
    }
};


export const useGetRecipes = () => {
    return useQuery<any[], Error>({queryKey: QUERY_KEY, queryFn: () => fetchRecipes()})
}