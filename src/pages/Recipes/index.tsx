import React from 'react';
import { useGetRecipes } from '../../hooks/recipes/useGetRecipes';
import Card from '../../components/Card';
import Header from '../../components/Header';

const Recipes: React.FC = () => {
const { data, isLoading } = useGetRecipes();
console.log(data, 'ICI');

if(isLoading){
    return (
        <div>Loading....</div>
    )
}
return (
    <>
    <Header />
    <div className="flex flex-wrap mt-16 justify-center">
        {data?.map((recipe, index) => (
            <Card id={recipe.id} key={index} data={recipe.fields} />
        ))}              
    </div>
    </>
  )
};

export default Recipes;