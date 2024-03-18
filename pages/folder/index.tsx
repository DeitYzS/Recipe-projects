import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout } from "@/utils/types";
import React, { useEffect, useState } from "react";
import CardRecipe from "@/components/CardRecipe";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import  useToken  from "@/hooks/useToken";
import RecipeWithId from "@/components/RecipeModal";
import { user } from "@nextui-org/react";

const FolderPage: NextPageWithLayout = () => {
  const router = useRouter();
  const [recipesState, setRecipesState] = useState<any[]>([]);
  const {userId} = useToken();
 

  useEffect(() => {
    const handleSearch = async () => {
      if (!query) return; // Do nothing if query is empty
      try {
        const response = await axios.get(`http://localhost:8080/findmy/${userId}`);
        const data = response.data;
        setRecipesState(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setRecipesState([]); 
      }
    };
    handleSearch();
  }, []);


  const Cardcomponent = ({recipes}:any) => {
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

  return (
    <>
      <div>
        {searching && (
          <div role="status" className="w-full h-full flex justify-center mt-10">
          <svg aria-hidden="true" className="inline w-52 h-52 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 " 
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
        )}


        <div className='className="grid grid-flow-rows grid grid-cols-2 mt-6 gap-2 w-full'>
          <Cardcomponent />
        </div>

        
      </div>
    </>
  );
};

FolderPage.getLayout = useDefaultLayout;
export default FolderPage;
function fetchRecipes() {
  throw new Error("Function not implemented.");
}

