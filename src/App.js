import React from 'react';
import { useState } from 'react';
import './App.css';

var numbers = [1, 2, 3, 4, 5];

function double(x) {
  return x * 2;
}

function mapNumbers() {
  const newNumbers = numbers.map(double);
  console.log(newNumbers);
}

function filterNumbers() {
  const newNumbers = numbers.filter(function (num) {
    return num < 3;
  });
  console.log(newNumbers);
}

function reduceNumbers() {
  const newNumbers = numbers.reduce(function (accumulator, currentNumber) {
    // console.log(accumulator);
    // console.log(currentNumber);
    return accumulator + currentNumber;
  });
  console.log(newNumbers);
}

function mapNumbersWithArrowFunction() {
  const newNumbers = numbers.map(x => x * 2);
  console.log(newNumbers);
}

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().getHours());

  function addOneHour() {
    setCurrentTime((prevTime) => (prevTime + 1) % 24);
    console.log(currentTime);
  }

  return (
    <div className="App">
      <h1>JavaScript ES6 Map/Filter/Reduce and Map with Arrow Function</h1>
      <p>{numbers}</p>
      <button onClick={mapNumbers}>Map</button>
      <button onClick={filterNumbers}>Filter</button>
      <button onClick={reduceNumbers}>Reduce</button>
      <button onClick={mapNumbersWithArrowFunction}>Map With Arrow Function</button>
      <h1>React Conditional Rendering</h1>
      {currentTime > 0 && currentTime < 10 ? <p>Good Morning</p> : null}
      {currentTime > 10 && currentTime < 15 ? <p>Good Afternoon</p> : null}
      {currentTime > 15 && currentTime < 18 ? <p>Good Evening</p> : null}
      {currentTime > 18 && currentTime < 24 ? <p>Good Night</p> : null}
      <button onClick={addOneHour}>Add 1 Hour to your time</button>
    </div>
  );
}

export default App;
