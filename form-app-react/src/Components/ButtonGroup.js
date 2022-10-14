import React from 'react';

export default function ButtonGroup({updateBudget}) {

  const [selectedButton, setSelectedButton] = React.useState(0);

  const SELECTED_BTN_STYLE = {
    backgroundColor: 'white',
    color: '#735E5D'
  }

  const BUTTON_TXT = [
    '$2K', '$5K', 'No Limit'
  ]

  return (
    <div className='button-box'>
      {BUTTON_TXT.map((amount, i) => (
        <button 
        style={selectedButton === i ? SELECTED_BTN_STYLE : {}}
        onClick={() => {
          setSelectedButton(i);
          updateBudget(amount);
        }}
        >{amount}</button>
      ))}
    </div>
  )
}