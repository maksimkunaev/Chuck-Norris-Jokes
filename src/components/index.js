import React, { Component } from "react";
import styles from "./index.styl";
import Main from "components/Main/";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Main />
      </div>
    );
  }
}

export default App;
