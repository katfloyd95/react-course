import ButtonGroup from "./ButtonGroup";

export default function InputContent({stage, updateValueEmail, updateValueDetails, budget, updateBudget}) {
  
  let inputContent;
  if (stage === 0) {
    inputContent = (
      <>
        <input 
          type='text' 
          onChange={e => updateValueEmail(e.target.value)} 
          placeholder={stage === 0 ? "What's your email?" : ""} />
      </>
    )
  } else if (stage === 1) {
    inputContent = (
      <>
        <ButtonGroup
          budget={budget}
          updateBudget={updateBudget}
        />
      </>
    )
  } else if (stage === 2) {
    inputContent = (
      <>
        <input 
          type='text' 
          onChange={e => updateValueDetails(e.target.value)} 
          placeholder={stage === 0 ? "What's your email?" : ""} />
      </>
    )
  }
  
  return (
    <div className='input-content'>
      {inputContent}
    </div>
  )
}