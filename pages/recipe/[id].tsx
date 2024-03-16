import { useDefaultLayout } from '@/hooks/useDefaultLayout'
import { NextPageWithLayout } from '@/utils/types'
import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
import data from '@/data.json'

export const getStaticPaths = async () => {
  //fetch data from an API
  const res = await data;
  const info = await res;

  const paths = data.map((recipe) => ({
    params: { id: recipe.id.toString()},
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async (context:any) => {
  const id = context.params.id;
  const res = await data;
  const info = await res;

  return{
    props: { recipe: info[id] }
  }
}
  

const RecipeWithId: NextPageWithLayout = ({ recipe }) => {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center p-20 text-md'>
        <div id='head' className='flex flex-col justify-center items-center'>
          <div className='mb-4 font-bold text-4xl'>{recipe.Name}</div>
          <img src={recipe.Images[0]} style={{ width: '300px', height: '300px' }} className='mt-4 mb-10 rounded-md' alt="Food" />
          <div className='flex justify-between w-3/4'>
            <p className='mb-2 font-bold'>AuthorName: <span className='font-normal'>{recipe.AuthorName}</span></p>
            <p className='mb-2 font-bold'>DatePublished: <span className='font-normal'>{recipe.DatePublished}</span></p>
          </div>
          <div className="mt-4 font-bold text-2xl">Description</div>
          <div className="mt-2">{recipe.Description}</div>
          <div className='mt-16 font-bold text-2xl'>Ingredients</div>
          <div className="mt-4 flex flex-col w-1/6">
            {recipe.RecipeIngredientParts.map((part:any, index:any) => (
              <div key={index} className="flex justify-between w-full">
                <div className="mt-2">{part}</div>
                <div className="mt-2">{recipe.RecipeIngredientQuantities[index]}</div>
              </div>
            ))}
          </div>
          <div className="mt-16 font-bold text-2xl">Recipe Instructions</div>
          <div className="mt-2">{recipe.RecipeInstructions}</div>
        </div>
      </div>
    </>
  )
}

RecipeWithId.getLayout = useDefaultLayout
export default RecipeWithId