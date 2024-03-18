import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout } from "@/utils/types";
import React, { useEffect, useState } from "react";
import CardRecipe from "@/components/CardRecipe";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import RecipeWithId from "@/components/RecipeModal";

const RecipePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [query, setQuery] = useState<string>('');
  const [recipesState, setRecipesState] = useState<any[]>([]);
  const [searching, setSearching] = useState<boolean>(false);
  const [spellCheck, setSpellCheck] = useState<string[]>([]);
 

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) return; // Do nothing if query is empty
      
      try {
        setSearching(true); // Start searching
        const response = await axios.get(`http://localhost:5000/search_es?query=${query}`);
        
        const data = response.data;
        setRecipesState(data.results);
        const suggestions = data.suggest.Name.map((item:any) => item.options.map((option:any) => option.text)).flat();
        setSpellCheck(suggestions);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setRecipesState([]); 
      } finally {
        setSearching(false); 
      }
    };
    handleSearch();
  }, [query]);


  const Cardcomponent = ({recipes}:any) => {
    if (searching) {
      return <div>Loading...</div>;
    }

    if (recipesState.length > 0) {
      return (
        <>
          {recipesState.map((recipe: any) => (
            <>
             {/* <Link href={`/recipe?rid=${recipe.RecipeId}`} passHref key={recipe.RecipeId}> */}
              <CardRecipe
                name={recipe.Name}
                images={recipe.Images}
                id={recipe.RecipeId}
                rating={recipe.AggregatedRating}
                category={recipe.RecipeCategory}
                recipe={recipe}
              />
            {/* </Link> */}
            </>
          ))}
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="https://th.bing.com/th/id/OIP.f0CPvQY8Zj61fbapA50AsQAAAA?rs=1&pid=ImgDetMain" 
              alt="No recipes found"
              className="w-64 h-64 mb-8"
              />
            <div className="text-gray-700 text-lg font-semibold">No recipes found</div>
            <div className="text-gray-500">Try refining your search terms or check back later.</div>
          </div>

          <div className="flex flex-col items-center justify-center h-full">
            <img
              src="https://th.bing.com/th/id/OIP.f0CPvQY8Zj61fbapA50AsQAAAA?rs=1&pid=ImgDetMain" 
              alt="No recipes found"
              className="w-64 h-64 mb-8"
            />
            <div className="text-gray-700 text-lg font-semibold">No recipes found</div>
            <div className="text-gray-500">Try refining your search terms or check back later.</div>
          </div>
        
        </>
      )
    }
  };

  console.log(recipesState);
  console.log(spellCheck);
  
  

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center p-6">Recipe</h1>
        <div className="flex justify-center">
          <input
            type="text"
            className="w-1/2 border-2 border-gray-300 p-2 rounded-lg mr-4"
            placeholder="Search for recipe"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full h-2/4"
            onClick={() => setQuery(query)} 
          >
            Search
          </button>
        </div>

        <div className="w-full flex justify-center">
          {spellCheck && spellCheck.length > 0 && (
            <div className=" flex">
              <span className="font-bold text-red-600">Did you mean :</span> 
              {spellCheck.map((suggestion, index) => (
                <span key={index} onClick={() => setQuery(suggestion)} className="text-blue-500 cursor-pointer">{index > 0 ? ', ' : ''}{suggestion}</span>
                ))}
            </div>
          )}
        </div>
        

        <div className='className="grid grid-flow-rows grid grid-cols-2 mt-6 gap-2 w-full'>
          <Cardcomponent />
        </div>

        
      </div>
    </>
  );
};

RecipePage.getLayout = useDefaultLayout;
export default RecipePage;
function fetchRecipes() {
  throw new Error("Function not implemented.");
}

