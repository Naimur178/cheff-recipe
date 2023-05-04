import React from 'react';
import HomeBanner from '../Home-Banner/HomeBanner';
import Chefs from '../Chefs/Chefs';
import Recipes from '../Recipes/Recipes';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            
            <Recipes></Recipes>
            <Chefs></Chefs>
            <Category></Category>
        </div>
    );
};

export default Home;