import React, { Component } from "react";
import styles from "./dashboard.module.css";
import globalStyles from "../../globalStyles.module.css";
import axios from "axios";

import Card from "../card/card";
import ProgressBar from "../progress-bar/progress-bar";

class Dashboard extends Component {
  state = {
    images: [],
    containers: []
  };

  componentDidMount() {
    this.getAvailableImages();
    this.getContainersRunning();
  }

  getAvailableImages = () => {
    axios
      .get("http://54.145.67.172:2375/images/json")
      .then(response => this.setState({ images: response.data }));
  };

  getContainersRunning = () => {
    axios
      .get("http://54.145.67.172:2375/containers/json")
      .then(response => this.setState({ containers: response.data }));
  };

  render() {
    return (
      <div className={styles.dashboardWrapper}>
        <div className="">
          <div className={globalStyles.heading}>Containers Running</div>
          <ProgressBar
            percentage={
              (this.state.containers.length / this.state.images.length) * 100
            }
          />
        </div>
        {this.state.images.length > 0 && (
          <>
            <div className={globalStyles.heading}>Images Available</div>
            <div className={styles.listWrapper}>
              {this.state.images.map(container => (
                <Card {...container} />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Dashboard;
