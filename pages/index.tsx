
import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout} from "@/utils/types";
import React, {useEffect, useState} from "react";
import CardRecipe from "@/components/CardRecipe";
import Link from "next/link";
import data from "@/data.json"



export const getStaticProps = async () => {
  const recipes = data;

  return {
    props: { recipes },
  };
}

const Page: NextPageWithLayout = ({ recipes }) => {
  const [recipesState, setRecipesState] = useState(recipes); // Using state for recipes

  const Cardcomponent = ({ recipes }: any) => {
    return (
      <>
        {Array.isArray(recipes) && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link href={`/recipe/${recipe.id}`} passHref key={recipe.id}>
                <CardRecipe
                  key={recipe.id}
                  name={recipe.name}
                  image={
                    recipe.images && recipe.images.length > 0
                      ? recipe.images[0]
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
      <div className="w-full h-96 shadow-md bg-pink-gradient p-32">
        <div className="flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold">Welcome to 481</h1>
            <p className="text-lg">The best place to find your next job</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <h1 className="text-4xl font-bold text-start p-6">Recommend For You:</h1>
        <div className="flex relative">
          <Cardcomponent recipes={recipesState} />{" "}
        </div>
      </div>
    </>
  );
};

Page.getLayout = useDefaultLayout;
export default Page;
