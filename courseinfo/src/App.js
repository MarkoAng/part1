import { useState } from 'react'

const Header = () => <h1>Get feedback</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = ({text, value}) => {
  return (
    <tr>
    <td> <h3>{text}: {value}</h3> </td>
    </tr>
  )
}

const Statistics = (props) => {
  return (
   <div>
    <h2>Statistics</h2>
    {(() => {
      if (props.total > 0) {
        return (
          <div>
        <StatisticLine text="Good" value={props.good}/>
        <StatisticLine text="Neutral" value={props.neutral}/>
        <StatisticLine text="Bad" value={props.bad}/>
        <StatisticLine text="Total" value={props.total}/>
        <StatisticLine text="Average" value={props.average}/>
        <StatisticLine text="Positive" value={props.positive}/>
        </div>
        )
      } else {
        return (
          <h3>No feedback given</h3>
        )
      }
    })()}
    </div>
)}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total;
  const positive = (total ? (good * 100) / total : 0) + " %";
  
  return (
    <div>
      <Header />
      <Button handleClick={() => setGood(good + 1)} text="Good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive}/>       
    </div>
  )
}

export default App
