import { useEffect, useState } from "react";
import Genstar from "./Genstar/index";
import { getEnv } from "./Genstar/util/env";

async function preloadImages() {
  const images = {};
  const path = getEnv();
  const numImages = 161;

  await Promise.all(
    Array.from({ length: numImages }, (_, i) => {
      const img = new Image();
      img.src = `${path}/images/${i + 1}.png`;
      return new Promise((resolve) => {
        img.onload = () => {
          images[img.src] = img;
          resolve();
        };
      });
    })
  );

  return images;
}

export default function App() {
  const [images, setImages] = useState({});
  useEffect(() => {
    preloadImages().then((images) => setImages(images));
  }, []);

  return <Genstar images={images} />;
}
