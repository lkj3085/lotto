import React from "react";
import { View } from "react-native";
import propTypes from "prop-types";

export const Spacer = (props) => {
  if (props.horizontal) {
    return <View style={{ marginLeft: props.space }} />;
  }

  return <View style={{ marginTop: props.space }} />;
};

Spacer.propTypes = {
  horizontal: propTypes.bool,
  space: propTypes.number.isRequired,
};

Spacer.defaultProp = {
  horizontal: false,
};
