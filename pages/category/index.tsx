import React, { useState } from "react";
import CategoryCard from "@/components/CategoryCard";
import { useDefaultLayout } from "@/hooks/useDefaultLayout";
import { NextPageWithLayout } from "@/utils/types";

const categoryType = [{
    title: "Breakfast",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
    title: "Lunch",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
    title: "Dinner",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
    title: "Dessert",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
    title: "Snack",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
    title: "Drink",
    image: "https://images.pexels.com/photos/6157052/pexels-photo-6157052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
];

const CategoryPage: NextPageWithLayout = () => {
//   const [category, setCategory] = useState(categoryType);

  const Cardcomponent = categoryType.map((type, i) => {
    return (
      <div key={i}>
        <CategoryCard title={type.title} image={type.image} />
      </div>
    );
  });

  return (
    <div>
        <h1 className="text-4xl font-bold text-center p-6">Category</h1>
    
        <div className="grid grid-flow-rows grid-cols-6 mt-6">
            {Cardcomponent}
        </div>
    </div>
  )
};

CategoryPage.getLayout = useDefaultLayout;
export default CategoryPage;
