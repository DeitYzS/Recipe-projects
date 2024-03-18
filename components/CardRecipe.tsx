import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import RecipeWithId from "@/components/RecipeModal";
import {useState} from "react";

const CardRecipe: React.FC<{ name: string; images: string[]; id: number; rating:any; category:any; recipe:object}> = ({ name, images, id , rating, category, recipe}) => {
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const [modalKey, setModalKey] = useState(0);

  const handleOpenModal = () => {
    setModalKey((prevKey) => prevKey + 1); // Increment modal key to force re-render
    onOpen();
  };

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
                   
            {/* <Button onPress={onOpen}> 
              <span className="font-bold">Details</span>  
            </Button>

            <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
                <ModalContent>
                  {(isClose) => (
                      <>
                        <ModalHeader>Recipe</ModalHeader>
                        <ModalBody>
                            <RecipeWithId recipe={recipe}/>
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
                return ( */}
            <div>
              <Button onPress={onOpen}>Details</Button>
              <Modal 
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
                        <RecipeWithId recipe={recipe} />
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
