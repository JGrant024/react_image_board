import { useState } from "react";

const ImageForm = ({ images, setImages }) => {
  const [image, setImage] = useState({
    url: "",
    caption: "",
  });

  const submit = (event) => {
    event.preventDefault();

    setImages([...images, image]);

    setImage({
      url: "",
      caption: "",
    });
  };

  return (
    <form onSubmit={submit}>
      <div>
        URL
        <input
          type="url"
          value={image.url}
          onChange={(e) => setImage({ ...image, url: e.target.value })}
        />
      </div>
      <div>
        Caption
        <input
          type="textarea"
          value={image.caption}
          onChange={(e) => setImage({ ...image, caption: e.target.value })}
        />
      </div>

      <button type="submit">Submit </button>
    </form>
  );
};

export default ImageForm;
