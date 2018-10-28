import React from 'react';
import styles from './progress-bar.module.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = (props) => (
    <div
      className={props.size ? '' : styles.smallProgress}
    >
      <CircularProgressbar
        style={props.class}
        percentage={props.percentage}
        text={`${props.percentage}%`}
      />
    </div>
);

export default ProgressBar
