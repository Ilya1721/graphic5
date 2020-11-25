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

    return {
      p2s1,
      p3s1,
      p2s2,
      p3s2,
    };
  };

  calcFourth = () => {
    const { E, pow } = Math;
    const { lf, lh, l } = this.props.fourthTask;
    const t = 1 / l;
    const ps =
      pow(E, -2 * lh * t) +
      ((2 * l) / (2 * lh - lf)) * (pow(E, -lf * t) - pow(E, -2 * lh * t));

    return {
      ps,
    };
  };

  calcFifth = () => {
    const { E, pow } = Math;
    const { omega1, omega2, s, p, fl, t1, t2 } = this.props.fifthTask;
    const factorial = this.factorial;

    let ps1 = 0;
    const t = 1 / fl;

    for (let i = 0; i <= omega2 - s; i++) {
      const n = omega2;
      let c = factorial(n) / (factorial(n - i) * factorial(i));
      c *= pow(E, -fl * (omega2 - i) * t) * pow(1 - pow(E, -fl * t), i);
      ps1 += c;
    }

    let temp = 0;
    for (let i = 0; i <= omega2 - s; i++) {
      temp += 1 / (s + i);
    }
    const tt1 = (1 / fl) * temp;

    let temp2 = 0;
    for (let i = 0; i < s; i++) {
      temp2 += pow(fl * t, i) / factorial(i);
    }
    //console.log(temp2);
    //console.log(-omega2 * fl * t);
    //console.log(pow(E, -omega2 * fl * t));

    const ps2 = pow(E, -fl * t) * temp2;
    const tt2 = ((s + 1) / omega1) * t1;

    console.log(ps1);
    console.log(ps2);
    //console.log(tt1);
    //console.log(tt2);

    return {
      ps1,
      tt1,
      ps2,
      tt2,
    };
  };

  factorial = (n) => {
    if (n === 0 || n === 1) {
      return 1;
    }
    let f = 1;
    for (let i = 1; i <= n; i++) {
      f *= i;
    }

    return f;
  };

  render() {
    const {
      firstTask,
      secondTask,
      thirdTask,
      fourthTask,
      fifthTask,
    } = this.calculate();

    return (
      <div className="output-data">
        <h3>Завдання 1</h3>
        <table>
          <thead>
            <tr>
              <th>Загальне резервування</th>
              <th>Роздільне резервування</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstTask.p1.toFixed(4)}</td>
              <td>{firstTask.p2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 2</h3>
        <table>
          <thead>
            <tr>
              <th>Загальний випадок системи з навантаженим резервом</th>
              <th>
                Система з навантаженим резервом при експоненціальному розподілі
                напрацювання елементу до відмови
              </th>
              <th>Для системи, яка складається з n ідентичних елементів</th>
            </tr>
            <tr>
              <th>імовірність безвідмовної роботи системи </th>
              <th>імовірність безвідмовної роботи системи </th>
              <th>середнє напрацювання до відмови</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{secondTask.ps1.toFixed(4)}</td>
              <td>{secondTask.ps2.toFixed(4)}</td>
              <td>{secondTask.ts.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 3</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                Система з ненавантаженим резервом з ідеальним перемикачем
              </th>
              <th colSpan={2}>
                Система з ненавантаженим резервом з неідеальним перемикачем
              </th>
            </tr>
            <tr>
              <th>двоелементна система</th>
              <th>триелементна система</th>
              <th>двоелементна система</th>
              <th>триелементна система</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{thirdTask.p2s1.toFixed(4)}</td>
              <td>{thirdTask.p3s1.toFixed(4)}</td>
              <td>{thirdTask.p2s2.toFixed(4)}</td>
              <td>{thirdTask.p3s2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 4</h3>
        <table>
          <thead>
            <tr>
              <th>Імовірність безвідмовної роботи системи</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fourthTask.ps.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Завдання 5</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>
                Система з дробовим резервуванням та ненавантаженим резервом
              </th>
              <th colSpan={2}>
                Система з дробовим резервуванням та навантаженим резервом
              </th>
            </tr>
            <tr>
              <th>імовірність безвідмовної роботи</th>
              <th>середнє напрацювання до відмови</th>
              <th>імовірність безвідмовної роботи</th>
              <th>середнє напрацювання до відмови</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{fifthTask.ps1.toFixed(7)}</td>
              <td>{fifthTask.tt1.toFixed(4)}</td>
              <td>{fifthTask.ps2.toFixed(7)}</td>
              <td>{fifthTask.tt2.toFixed(4)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default OutputData;
