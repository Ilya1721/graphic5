import React from "react";
import "./css/main.css";
import InputData from "./components/InputData";
import OutputData from "./components/OutputData";

class App extends React.Component {
  firstTask = {
    p11: 0.61,
    p12: 0.28,
    p13: 0.58,
    p21: 0.82,
    p22: 0.81,
    p23: 0.87,
  };

  secondTask = {
    p1: 0.28,
    p2: 0.58,
    p3: 0.82,
    l1: 5.8,
    l2: 6.3,
    l3: 5.4,
    l: 23.5,
  };

  thirdTask = {
    tl1: 24.9,
    tl2: 26.5,
    tls: 18.3,
  };

  fourthTask = {
    lf: 26.5,
    lh: 18.3,
    l: 23.5,
  };

  fifthTask = {
    omega1: 39,
    omega2: 49,
    s: 13,
    p: 0.53,
    fl: 4.69,
    t1: 47,
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
        <OutputData
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
