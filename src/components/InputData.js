import React from "react";

class InputData extends React.Component {
  render() {
    const { p1, p2, p3, l1, l2, l3, l } = this.props.secondTask;
    const { p11, p12, p13, p21, p22, p23 } = this.props.firstTask;
    const { tl1, tl2, tls } = this.props.thirdTask;
    const { lf, lh } = this.props.fourthTask;
    const { omega1, omega2, s, p, fl, t1, t2 } = this.props.fifthTask;

    return (
      <div className="input-data">
        <h3>Початкові дані до завдання 1</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={6}>Імовірність безвідмовної роботи елементів</th>
            </tr>
            <tr>
              <th>
                P<sub>11</sub>
              </th>
              <th>
                P<sub>12</sub>
              </th>
              <th>
                P<sub>13</sub>
              </th>
              <th>
                P<sub>21</sub>
              </th>
              <th>
                P<sub>22</sub>
              </th>
              <th>
                P<sub>23</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p12}</td>
              <td>{p11}</td>
              <td>{p13}</td>
              <td>{p21}</td>
              <td>{p22}</td>
              <td>{p23}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до завдання 2</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={3}>
                Загальний випадок системи з навантаженим резервом
              </th>
              <th colSpan={3}>
                Система з навантаженим резервом при експоненціальному розподілі
                напрацювання елементу до відмови
              </th>
              <th colSpan={3}>
                Для системи, яка складається з n ідентичних елементів
              </th>
            </tr>
            <tr>
              <th>
                P<sub>1</sub>
              </th>
              <th>
                P<sub>2</sub>
              </th>
              <th>
                P<sub>3</sub>
              </th>
              <th>
                γ<sub>1</sub>
              </th>
              <th>
                γ<sub>2</sub>
              </th>
              <th>
                γ<sub>3</sub>
              </th>
              <th>γ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{p1}</td>
              <td>{p2}</td>
              <td>{p3}</td>
              <td>{l1}</td>
              <td>{l2}</td>
              <td>{l3}</td>
              <td colSpan={3}>{l}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до завдання 3</h3>
        <table>
          <thead>
            <tr>
              <th>Система з ненавантаженим резервом з ідеальним перемикачем</th>
              <th colSpan={2}>
                Система з ненавантаженим резервом з неідеальним перемикачем
              </th>
            </tr>
            <tr>
              <th>γ</th>
              <th>γ</th>
              <th>
                γ<sub>S</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tl1}</td>
              <td>{tl2}</td>
              <td>{tls}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до завдання 4</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Імовірність безвідмовної роботи системи</th>
            </tr>
            <tr>
              <th>
                При повному навантаженні γ<sub>f</sub>
              </th>
              <th>
                При повному навантаженні γ<sub>h</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{lf}</td>
              <td>{lh}</td>
            </tr>
          </tbody>
        </table>
        <h3 className="margin-top">Початкові дані до завдання 5</h3>
        <table>
          <thead>
            <tr>
              <th colSpan={5}>
                Система з дробовим резервуванням та ненавантаженим резервом
              </th>
              <th colSpan={4}>
                Система з дробовим резервуванням та навантаженим резервом
              </th>
            </tr>
            <tr>
              <th>ω</th>
              <th>s</th>
              <th>p</th>
              <th>γ</th>
              <th>
                T<sub>1</sub>
              </th>
              <th>ω</th>
              <th>s</th>
              <th>γ</th>
              <th>
                T<sub>1</sub>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{omega1}</td>
              <td>{s}</td>
              <td>{p}</td>
              <td>{fl}</td>
              <td>{t1}</td>
              <td>{omega2}</td>
              <td>{s}</td>
              <td>{fl}</td>
              <td>{t2}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default InputData;
