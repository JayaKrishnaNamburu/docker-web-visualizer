import React from "react";
import globalStyles from "../../globalStyles.module.css";

const Tag = ({ name }) => {
  return <div className={globalStyles.simpleTag}>{name}</div>;
};

export default Tag;
