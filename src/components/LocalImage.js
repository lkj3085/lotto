import React from "react";
import { Image } from "react-native";
import propTypes, { number } from "prop-types";

export const LocalImage = (props) => {
  return (
    <Image
      source={props.localAsset}
      style={[props.style, { width: props.width, height: props.height }]}
    />
  );
};

LocalImage.propTypes = {
  localAsset: propTypes.number.isRequired,
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
};
