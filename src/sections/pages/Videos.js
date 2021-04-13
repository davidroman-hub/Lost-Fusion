import React, { Fragment } from "react";
import "../../styles/home.scss";
import ImageGallery from "react-image-gallery";
import { images2 } from "./images";

const Videos = () => {
  const galeryBody = () => {
    return (
      <Fragment>
        <br />
        <br />
        <ImageGallery items={images2} />
        <br />
      </Fragment>
    );
  };

  return <div>{galeryBody()}</div>;
};

export default Videos;
