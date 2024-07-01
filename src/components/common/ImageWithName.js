import React from "react";
import PropTypes from "prop-types";

export default function ImageWithName(props) {
  const imgStyle = {
    height: "80% !important",
    width: "80% !important",
    minHeight: "160px",
    maxHeight: "80%",
    maxWidth: "80%",
  };

  return (
    <>
      <img src={props.imageName} className="card-img-top" alt="not available" style={imgStyle} />
      <h2 className={`mt-3 text-${props.theme.text}`}>{props.name}</h2>
    </>
  );
}

ImageWithName.propTypes = {
  theme: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
};
