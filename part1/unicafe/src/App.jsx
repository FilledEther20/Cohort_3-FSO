import { useState } from "react";

const Statistics = ({ good, bad, neutral }) => {
  const total = good + bad + neutral;
  if (total === 0) {
    return (
      <>
        <table>
          <tbody>
            <tr>
            <td>No feedback given</td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
  return (
    <>
      <table>
        <tbody>
          <tr>
          <td>Total {total}</td>
          </tr>
          <tr>
          <td>Average {total / 3}</td>
          </tr>
          <tr>
          <td>Positive {(100 * good) / total}%</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const Button = ({ handler, part }) => {
  return (
    <>
      <button onClick={handler}>{part}</button>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [total, setTotal] = useState(0);
  const handleGoodClick = () => {
    setGood(good + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };
  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  return (
    <>
      <h1>Give Feedback</h1>
      <Button handler={handleGoodClick} part="good" />
      <Button handler={handleBadClick} part="bad" />
      <Button handler={handleNeutralClick} part="neutral" />
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>good</td>
            <td>{good}</td>
          </tr>

          <tr>
            <td>bad</td>
            <td>{bad}</td>
          </tr>

          <tr>
            <td>neutral</td>
            <td>{neutral}</td>
          </tr>
        </tbody>
      </table>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  );
};

export default App;
