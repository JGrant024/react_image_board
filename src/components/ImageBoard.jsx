import { useState } from "react";

import ImageList from "./ImageList";
import ImageForm from "./ImageForm";

const ImageBoard = () => {
  const [images, setImages] = useState([
    {
      url: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
      caption: "Let's learn to code! ",
    },
    {
      url: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29mdHdhcmUlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D",
      caption: "THE BIG SCREEN!! ",
    },
    {
      url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww",
      caption: "Well it's not going to build itself! ",
    },
  ]);

  return (
    <div>
      <ImageForm images={images} setImages={setImages} />
      <ImageList images={images} />
    </div>
  );
};

export default ImageBoard;
