import React from "react";

class OutputData extends React.Component {
  calculate = () => {
    return {
      firstTask: this.calcFirst(),
      secondTask: this.calcSecond(),
      thirdTask: this.calcThird(),
      fourthTask: this.calcFourth(),
      fifthTask: this.calcFifth(),
    };
  };

  calcFirst = () => {
    const { p11, p12, p13, p21, p22, p23 } = this.props.firstTask;
    const firstGroup = [p11, p12, p13];
    const secondGroup = [p21, p22, p23];

    const firstP1 = 1 - firstGroup.reduce((a, b) => a * b, 1);
    const secondP1 = 1 - secondGroup.reduce((a, b) => a * b, 1);
    const p1 = 1 - firstP1 * secondP1;

    let firstP2 = 1;
    firstGroup.forEach((i) => {
      firstP2 *= 1 - i;
    });
    firstP2 = 1 - firstP2;
    let secondP2 = 1;
    secondGroup.forEach((i) => {
      secondP2 *= 1 - i;
    });
    secondP2 = 1 - secondP2;
    const p2 = firstP2 * secondP2;

    return {
      p1,
      p2,
    };
  };

  calcSecond = () => {
    const { E, pow } = Math;
    const { p1, p2, p3, l1, l2, l3, l } = this.props.secondTask;
    const firstGroup = [p1, p2, p3];
    const secondGroup = [l1, l2, l3];
    let ps1 = 1;
    firstGroup.forEach((i) => {
      ps1 *= 1 - i;
    });
    ps1 = 1 - ps1;
    let ps2 = 1;
    const t = 1 / (secondGroup.reduce((a, b) => a + b, 0) / secondGroup.length);
    secondGroup.forEach((i) => {
      ps2 *= 1 - pow(E, -i * t);
    });
    ps2 = 1 - ps2;
    let ts = 0;
    const n = 3;
    for (let i = 1; i <= n; i++) {
      ts += 1 / (i * l);
    }

    return {
      ps1,
      ps2,
      ts,
      t,
      n,
    };
  };

  calcThird = () => {
    const { tl1, tl2, tls } = this.props.thirdTask;
    const { E, pow } = Math;
    const t1 = 1 / tl1;
    const p2s1 = pow(E, -tl1 * t1) * (1 + tl1 * t1);
    const p3s1 = pow(E, -tl1 * t1) * (1 + tl1 * t1 + pow(tl1 * t1, 2) / 2);
    const t2 = 1 / tl2;
    const p2s2 =
      pow(E, -tl2 * t2) * (1 + (tl2 / tls) * (1 - pow(E, -tls * t2)));
    const p3s2 =
      pow(E, -tl2 * t2) * (1 + (tl2 / tls) * (1 - pow(E, -tl2 * t2))) +
      pow(E, -tl2 * t2) *
        pow(tl2 / tls, 2) *
        (1 - pow(E, -tls * t2) - tls * t2 * pow(E, -tls * t2));

    console.log(p2s1);
    console.log(p3s1);
    console.log(p2s2);
    console.log(p3s2);

    return {
      p2s1,
      p3s1,
      p2s2,
      p3s2,
    };
  };

  calcFourth = () => {
    const { lf, lh } = this.props.fourthTask;

    return {
      p: 0,
    };
  };

  calcFifth = () => {
    const {
      omega1,
      omega2,
      s1,
      s2,
      p,
      fl1,
      fl2,
      t1,
      t2,
    } = this.props.fifthTask;

    return {
      p: 0,
    };
  };

  render() {
    const answer = this.calculate();

    return (
      <div className="output-data">
        <h3>Завдання 1</h3>
      </div>
    );
  }
}

export default OutputData;
