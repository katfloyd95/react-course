import React from 'react';
import './index.css'

const days = ['M', 'Tu', 'W', 'Th', 'F', 'Sa', 'Su' ]

function App() {

  const [selectedDay, setSelectedDay] = React.useState("M");

  const [allTomatoes, setAllTomatoes] = React.useState({});

  function removeTomato() {
    return (
      setAllTomatoes(
        {
          ...allTomatoes,
          [selectedDay]: `${allTomatoes[selectedDay].slice(0,-2)}`
        }
      )
    )
  }

  function addTomato() {
    return (
      setAllTomatoes(
        {
          ...allTomatoes,
          [selectedDay]: `${allTomatoes[selectedDay] ? allTomatoes[selectedDay] : ''}🍅`
        }
      )
    )
  }

  return (
    <div className="App">
      <div className="container">
        <h1>Tomato Counter</h1>
        {days.map(day => (
            <div 
              onClick={() => {setSelectedDay(day)}}
              style={selectedDay === day ? {color: 'black'} : {}}
              key={day} 
              className='tomato-box'>
              <h3>{day}</h3>
              <div className='tomato-day-box'>
                <h3>{allTomatoes[day]}</h3>
              </div>
            </div>
        ))}
        <div className='btn-container'>
          <button 
            className="button"
            onClick={removeTomato}
          >-</button>
          <button 
            className="button" 
            onClick={addTomato}
          >+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
