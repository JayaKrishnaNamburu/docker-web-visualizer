import React from "react";
import styles from "./card.module.css";
import contianerHolder from "../../images/crane.png";
import { convertDate, formatSize } from "../../utils/helper";
import Tag from "../tag/tag";

const Card = props => {
  return (
    <div className={styles.card}>
      <img src={contianerHolder} className={styles.holder} alt="placeholer" />
      <ul>
        <li>Created on: {convertDate(props.Created)}</li>
        <li>Size: {formatSize(props.Size)}</li>
      </ul>
      {props.RepoTags.length > 0 &&
        props.RepoTags.map(name => <Tag name={name} />)}
    </div>
  );
};

export default Card;
