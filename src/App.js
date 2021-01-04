import { useEffect, useState } from "react";
import Genstar from "./Genstar/index";
import { getEnv } from "./Genstar/util/env";

export default function App() {
  const [images, setImages] = useState({});
  useEffect(() => {
    function preloadImages(cb) {
      const images = {};
      const path = getEnv();
      let i = 161;
      while (i > 0) {
        const imghld = new Image();
        imghld.src = `${path}/images/${i}.png`;
        images[imghld.src] = imghld;
        i--;
      }
      cb(images);
    }

    preloadImages((images) => setImages(images));
  }, []);

  return <Genstar images={images} />;
}
