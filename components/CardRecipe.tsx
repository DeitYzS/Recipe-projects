import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import RecipeWithId from "@/components/RecipeModal";
import {useState} from "react";
import axios from "axios";
import Link from "next/link";

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


const CardRecipe: React.FC<{ name: string; images: string[]; id: number; rating:any; category:any; recipe:object}> = ({ name, images, id , rating, category, recipe}) => {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();

  const randomRgbColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

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
      <div className="bg-white w-full h-52 shadow-md rounded m-3 overflow-hidden flex flex-col-2">
        <div className="h-full w-3/6 ">
          <img
            className="w-full h-full object-cover rounded-t"
            src={images.length > 0 ? images[0] : "https://ecowaterqa.vtexassets.com/arquivos/ids/157057/stillnoimageavailable.jpg?v=637179063186200000"}
            alt="piña"
          />
        </div>

        <div className="w-full h-full p-3">
          <div className="text-gray-700 flex justify-between">
            <span className="text-lg font-semibold uppercase tracking-wide break-all">
              {name}
            </span>
            
            <div>
              <Button onPress={onOpen} className="font-bold">Details</Button>
              <Modal 
                scrollBehavior="inside"
                size="full"
                backdrop="opaque" 
                isOpen={isOpen} 
                onOpenChange={onOpenChange}
                classNames={{
                  backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
                >
                <ModalContent>
                  {(onClose) => (
                    <>
                      <ModalHeader className="flex flex-col gap-1">Recipe Details</ModalHeader>
                      <ModalBody>
                        <Link href={`/recipe?rid=${id}`} passHref key={id}>
                          <RecipeWithId recipe={recipe} />
                        </Link>
                      </ModalBody>
                      <ModalFooter>
                        <Button color="danger" variant="light" onPress={onClose}>
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                          Action
                        </Button>
                      </ModalFooter>
                    </>
                  )}
                </ModalContent>
              </Modal>
          </div>

          </div>
          <div style={{background: randomRgbColor()}} className=" object-cover rounded-md w-3/12 text-center font-bold text-white mb-2">
              {category}
          </div>

          <div className="w-full right-0 mt-24">
            <div className="flex justify-end">
              {renderStars(rating)} ({rating})
            </div>
          </div>

        </div>
      </div>
  );
};

export default CardRecipe;
