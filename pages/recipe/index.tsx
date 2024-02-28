import CategoryRecipe from "@/components/CardRecipe";
import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout } from "@/utils/types";
import React from "react";

const recipe = [
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Milkshake",
    image:
      "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

const RecipePage: NextPageWithLayout = () => {
  const Cardcomponent = recipe.map((type, i) => {
    return (
      <div key={i}>
        <CategoryRecipe title={type.title} image={type.image} />
      </div>
    );
  });

  return (
    <div>
      <h1 className="text-4xl font-bold text-center p-6">
        Recipe
      </h1>

      <div className="grid grid-flow-rows grid-cols-6 mt-6">
        {Cardcomponent}
      </div>
    </div>
  );
};

RecipePage.getLayout = useDefaultLayout;
export default RecipePage;
