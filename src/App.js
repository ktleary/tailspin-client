import { useEffect } from "react";
import Genstar from "./Genstar/index";
import { getEnv } from "./Genstar/util/env";

export default function App() {
  useEffect(() => {
    function preloadImages() {
      const path = getEnv();
      let i = 161;
      while (i > 0) {
        const imghld = new Image();
        imghld.src = `${path}/images/${i}.png`;
        i--;
      }
    }

    preloadImages();
  }, []);

  return <Genstar />;
}
