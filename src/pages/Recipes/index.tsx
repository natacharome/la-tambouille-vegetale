import React from 'react';
import { useGetRecipes } from '../../hooks/recipes/useGetRecipes';
import Card from '../../components/Card';

const Recipes: React.FC = () => {
const { data, isLoading } = useGetRecipes();
console.log(data && data[0].properties.Recettes.title[0].text.content);
if(isLoading){
return (
    <div>Loading....</div>
)
}
return (
<div className="cards">
    {data?.map((recipe, index) => (
        <Card id={recipe.id} key={index} img={recipe.img} title={recipe.properties.Recettes.title[0].text.content} data={recipe.id} />
    ))}              
</div>
)
};

export default Recipes;