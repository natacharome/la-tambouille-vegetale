import React from 'react';
import { useGetRecipes } from '../../hooks/recipes/useGetRecipes';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Recipes: React.FC = () => {
const { data, isLoading } = useGetRecipes();
console.log(data);

if(isLoading){
return (
    <div>Loading....</div>
)
}
return (
<>
<Header />
<div className="cards">
    {data?.map((recipe, index) => (
        <Card id={recipe.id} key={index} data={recipe} />
    ))}              
</div>
</>

)
};

export default Recipes;