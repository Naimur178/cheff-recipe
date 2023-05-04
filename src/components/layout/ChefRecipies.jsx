import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

const ChefRecipies = () => {
    const { id } = useParams();
    const chefReciepe = useLoaderData();
    const chefResInfo = chefReciepe[0];
    console.log(chefReciepe)
    return (
        <div className='w-3/4 mx-auto'>
            <div className="hero   py-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={chefReciepe[0].img} className="max-w-sm rounded-lg shadow-2xl basis-1/2" />
                    <div className='basis-1/2'>
                        <h1 className="text-5xl font-bold">{chefResInfo.name}</h1>
                        <p className="pt-6">He with a passion for creating the most delicious and authentic Chinese cuisine.</p>
                        <p>Experience: {chefResInfo.experience} Years</p>
                        <p>No. of reciepes: {chefResInfo.numberOfRecipe} </p>
                        <p>Rating: {chefResInfo.ratings}</p>
                        <p>Likes: {chefResInfo.ratingsCount}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center py-4 text-3xl font-semibold shadow-xl'>Exciting Reciepes</h2>
                <div className='grid lg:grid-cols grid-cols-1 gap-4'>
                    {
                        chefResInfo.recipe.map(rec =>

                            <div key={rec.id} className="card  glass my-4 hover:shadow-2xl bg-base-200">
                                <figure><img src={rec.image} className='rounded-2xl' alt="car!" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{rec.title}</h2>
                                    <p>
                                        <h2 className='font-semibold text-lg'>Ingradients</h2>
                                        {
                                            rec.ingredients.map(ingrad => <div>

                                                <ul>
                                                    <li>{ingrad}</li>
                                                </ul>
                                            </div>)
                                        }
                                    </p>
                                    <div> 
                                    <h2 className='font-semibold text-lg'>cooking Procedure</h2>
                                        {
                                            rec.directions.map(dir=>
                                                <div>
                                                   
                                                    <p>{dir}</p>
                                                </div> )
                                        }
                                    </div>
                                    
                                    <div className="card-actions justify-end">
                                        

                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default ChefRecipies;