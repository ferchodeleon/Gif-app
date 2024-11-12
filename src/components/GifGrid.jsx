import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  //Se crea un custom hook con el fin de ahorrar código
  const { images, isLoading } = useFetchGifs(category);

  // Manera antes del hook personalizado de utilizar
  // const [images, setImages] = useState([]);

  // const getImages = async () => {
  //   const data = await getGif(category);
  //   console.log("images", data);
  //   setImages(data);
  // };

  // useEffect(() => {
  //   getImages();
  // }, []);

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {isLoading ? (
          <p>Cargando..</p>
        ) : (
          images.map((image) => <GifItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};
