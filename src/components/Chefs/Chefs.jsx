import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Chefs = () => {
    const [chefs, setChefs] =useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
        .catch(error => console.log(error))
    },[])
    
    return (
        <div className='w-3/4 mx-auto mt-16'>
            <div className='text-center my-8 w-3/4 mx-auto'>
                <h2 className='pb-4 text-4xl font-bold'>OUR CHEFS</h2>
                <p>Our Chinese chefs are true masters of their craft, with a passion for creating the most delicious and authentic Chinese cuisine. Their skill and expertise are evident in every dish they prepare, and their commitment to using only the freshest and highest quality ingredients is truly impressive.</p>
            </div>
            <div className='grid grid-cols-3 gap-10 my-8 drop-shadow-2xl'>
            
            {
                 chefs.map(chef => 
                     <div className="card w-96 glass hover:bg-gray-200 drop-shadow-xl" key={chef.id}>
                     <figure><img src={chef.img} alt="car!"/></figure>
                     <div className="card-body">
                       <h2 className="card-title">{chef.name}</h2>
                       <p className='text-center'>He with a passion for creating the most delicious and authentic Chinese cuisine.</p>
                       <p>Experience: {chef.experience} Years</p>
                       <p>No. of reciepes: {chef.numberOfRecipe} </p>
                       <p>Rating: {chef.ratings}</p>
                       <p>Likes: {chef.ratingsCount}</p>
                       <div className="card-actions justify-center ">
                       <button className="btn btn-outline w-full btn-primary">See All Recipies</button>
                       </div>
                     </div>
                   </div> )
            }
         </div>
        </div>
    );
};

export default Chefs;