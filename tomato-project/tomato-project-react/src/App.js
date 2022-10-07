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

  let tomatoes = []

  for (let i=0; i < number; i++) {
    tomatoes.push("🍅");
  }
  
  const tomatoString = tomatoes.join("");

  return (
    <div className="App">
      <div className="container">
        <h1>Tomato Counter</h1>
        <div className ="rendered-tomatoes">
          <h4>{!number ? "No tomatoes yet" : tomatoString}</h4>
        </div>
        <div className="tomato-container">
          <div className="btn-container">
          <button onClick={subNumber} >-</button>
            <button onClick={addNumber} >+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
