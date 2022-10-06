import React from 'react';

function App() {

  const [number, setNumber] = React.useState(0);

  function addNumber() {
    return (
      setNumber(number + 1)
    )
  }
  function subNumber() {
    return (
      setNumber(number - 1)
    )
  }


  return (
    <div className="App">
      <div className="container">
        <h1>Tomato Counter</h1>
        <div className="tomato-container">
          <h1>{number}</h1>
          <div className="btn-container">
            <button onClick={addNumber} >+</button>
            <button onClick={subNumber} >-</button>
          </div>
        </div>
        <div className ="rendered-tomatoes"></div>
      </div>
    </div>
  );
}

export default App;
