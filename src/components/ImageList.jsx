import React from "react";

const ImageList = ({images}) => {
    return(
        <div>
            {images.map((image) => {
                return (
                    <>
                    {image.caption}
                    <ul>
                        <li>
                            <img src={image.url} alt=""/>
                        </li>
                    </ul>
                    </>
                )
            })}
        </div>
    )

}

export default ImageList; 