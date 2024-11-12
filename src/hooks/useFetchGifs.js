import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isloading, setIsLoading] = useState(true);

  const getImages = async () => {
    const data = await getGifs(category);
    setImages(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  //Desde ECMA6 cuando el nombre de la key es igual al value se puede dejar solo el value y ya se entiende el nombre del key
  return {
    images,
    isLoading: isloading,
  };
};
