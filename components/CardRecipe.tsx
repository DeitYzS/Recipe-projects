import Link from "next/link";
import React from "react";

const CardRecipe: React.FC<{ name: string; image: string; id: number }> = ({ name, image, id }) => {
  return (
      <div className="bg-white w-72 h-52 shadow-md rounded m-3 overflow-hidden">
        <div className="h-2/3 w-full">
          <img
            className="w-full h-full object-cover rounded-t"
            src={image}
            alt="piña"
          />
        </div>
        <div className="w-full h-1/3 p-3">
          <div className="text-gray-700">
            <span className="text-lg font-semibold uppercase tracking-wide break-all">
              {name}
            </span>
          </div>
        </div>
      </div>
  );
};

export default CardRecipe;
