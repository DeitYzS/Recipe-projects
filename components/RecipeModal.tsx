import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export const getStaticPaths = async () => {
  try {
    const response = await axios.get('http://localhost:5000/recipes'); 
    let recipes = response.data;
    
    recipes = recipes.replace(/NaN/g, "null");
    recipes = JSON.parse(recipes);
    
    const paths = recipes.map((recipe:any) => ({
      params: { id: recipe.id.toString() }
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error:any) {
    console.error("Error fetching data:", error.message);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export const getStaticProps = async ({ params }:any) => {
  try {
    const id = params.id;
    const response = await axios.get(`http://localhost:5000/recipes/${id}`);
    const recipe = response.data;

    return {
      props: { recipe: recipe }
    };
  } catch (error:any) {
    console.error("Error fetching recipe:", error.message);
    return {
      props: { error: error.message } 
    };
  }
};



const RecipeWithId: React.FC <{recipe:any}>= ({ recipe }:any) => {
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5 ? 1 : 0;

    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className=" text-yellow-500">&#x2B50;</span>);
    }
    if (halfStar) {
      stars.push(<span key="half" className=" text-yellow-500"></span>);
    }
    return stars;
  };

  return (
    <>
    <div className='w-full h-full text-md'>
      <div id='head' className='flex flex-row w-full'>
          <div className='w-1/2'>
            <img src={recipe && recipe.Images && recipe.Images.length > 0 ? recipe.Images[0] : "https://ecowaterqa.vtexassets.com/arquivos/ids/157057/stillnoimageavailable.jpg?v=637179063186200000"}
              style={{ width: '900px', height: '800px' }} className='rounded-md' alt="#Food" 
              />
          </div>

        <div className='w-1/2'>
          <div className='flex justify-between w-full mt-2'>
              <div className='mb-4 font-bold text-4xl w-1/2'>
                  {recipe && recipe?.Name}
              </div>
              <div className="w-1/2 mr-6 flex justify-end">
                  {renderStars(recipe.AggregatedRating)} ({recipe.AggregatedRating.toFixed(1)})
              </div>
          </div>

          <div className='flex justify-between w-3/4'>
            <p className='mb-2 font-bold'>AuthorName: <span className='font-normal'>{recipe && recipe?.AuthorName}</span></p>
            <p className='mb-2 font-bold'>DatePublished: <span className='font-normal'>{recipe && recipe?.DatePublished}</span></p>
          </div>
          <div className="mt-4 font-bold text-2xl">Description</div>
          <div className="mt-2">{recipe && recipe?.Description}</div>
          <div className='mt-16 font-bold text-2xl'>Ingredients</div>
          <div className="mt-4 w-1/3 flex flex-col-2">
            <div className=' w-1/2'>
              {recipe && recipe.RecipeIngredientParts && (
                recipe.RecipeIngredientParts.map((instruction: string, index: number) => (
                  <div key={index} className="mt-2 w-1/2"> {instruction.replace(/\[|\]|'/g, "")}</div>
                  ))
                  )}
            </div>
            <div className='w-1/2 flex flex-col items-end'>
              {recipe && recipe.RecipeIngredientQuantities && (
                recipe.RecipeIngredientQuantities.map((instruction: string, index: number) => (
                  <div key={index} className="mt-2"> {instruction}</div>
                  ))
                  )}
            </div>
                  
          </div>
          <div className="mt-16 font-bold text-2xl">Recipe Instructions</div>
          <div className="mt-2 ">
          {recipe && recipe.RecipeInstructions && (
            recipe.RecipeInstructions.map((instruction: string, index: number) => (
              <div key={index} className="mt-2">{index + 1}) {instruction}</div>
              ))
              )}
          </div>
        </div>

       </div>
      </div> 
    </>
  )
}

export default RecipeWithId