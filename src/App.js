import React from "react";
import "./css/main.css";
import InputData from "./components/InputData";

class App extends React.Component {
  firstTask = {
    p11: 0.41,
    p12: 0.18,
    p13: 0.58,
    p21: 0.82,
    p22: 0.81,
    p23: 0.87,
  };

  secondTask = {
    p1: 0.18,
    p2: 0.58,
    p3: 0.82,
    l1: 4.8,
    l2: 6.3,
    l3: 5.4,
    l: 13.5,
  };

  thirdTask = {
    tl1: 14.9,
    tl2: 16.5,
    tls: 8.3,
  };

  fourthTask = {
    lf: 16.5,
    lh: 8.3,
  };

  fifthTask = {
    omega1: 29,
    s1: 13,
    p: 0.53,
    fl1: 4.69,
    t1: 47,
    omega2: 39,
    s2: 13,
    fl2: 4.69,
    t2: 70,
  };

  render() {
    return (
      <div className="app">
        <InputData
          firstTask={this.firstTask}
          secondTask={this.secondTask}
          thirdTask={this.thirdTask}
          fourthTask={this.fourthTask}
          fifthTask={this.fifthTask}
        />
      </div>
    );
  }
}

export default App;
