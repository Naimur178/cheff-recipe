import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div className='w-3/4 mx-auto mt-16'>
            <div className='text-center my-8 w-3/4 mx-auto'>
                <h2 className='pb-4 text-4xl font-bold'>Our Foods</h2>
                <p>Our Chinese chefs are true masters of their craft, with a passion for creating the most delicious and authentic Chinese cuisine. Their skill and expertise are evident in every dish they prepare, and their commitment to using only the freshest and highest quality ingredients is truly impressive.</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10 my-8 drop-shadow-2xl'>
            
            {
                 recipes.map(recipe => 
                     <div className="card w-96 glass hover:bg-gray-200 drop-shadow-xl" key={recipe.id}>
                     <figure><img src={recipe.image} alt="car!"/></figure>
                     <div className="card-body">
                       <h2 className="card-title">{recipe.title}</h2>
                       <p className='text-center'>He with a passion for creating the most delicious and authentic Chinese cuisine.</p>
                       
                       
                     </div>
                   </div> )
            }
         </div>
        </div>
    );
};

export default Recipes;