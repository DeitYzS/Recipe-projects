
import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout} from "@/utils/types";
import React, {useEffect, useState} from "react";
import CardRecipe from "@/components/CardRecipe";
import Link from "next/link";
import data from "@/data.json"



export const getStaticProps = async () => {
  // const recipe = data

  // return {
  //   props: { recipes: recipe },
  // }

  try {
    const res = await fetch("http://localhost:8000/recipes");
    if (!res.ok) {
      throw new Error("Failed to fetch data from the server");
    }
    const rawData = await res.text();
    const data = JSON.parse(rawData.replace(/NaN/g, "null")); 
    return {
      props: { recipes: data },
    };
  } catch (error:any) {
    console.error("Error fetching data:", error.message);
    return {
      props: { recipes: [] },
    };
  }
};


const RecipePage: NextPageWithLayout = ({ recipes }) => {
  const [recipesState, setRecipesState] = useState(recipes); 

  

  const Cardcomponent = ({ recipes }: any) => {
    console.log(recipes.Images);
    
    return (
      <>
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link href={`/recipe/${recipe.id}`} passHref key={recipe.id}>
                <CardRecipe
                  key={recipe.id}
                  name={recipe.Name}
                  image={
                    recipe.Images && recipe.Images.length > 0
                      ? recipe.Images[0]
                      : ""
                  }
                  id={recipe.id}
                />
            </Link>
          ))
        ) : (
          <div className="font-mono text-2xl flex justify-center">Error</div>
        )}
      </>
    );
  };

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center p-6">Recipe</h1>
        <div className="grid grid-flow-rows grid-cols-6 mt-6">
          <Cardcomponent recipes={recipesState} />{" "}
        </div>
      </div>
    </>
  );
};

RecipePage.getLayout = useDefaultLayout;
export default RecipePage;
