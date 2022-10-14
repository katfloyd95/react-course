export default function InputContent({stage}) {
  
  let inputContent;
  if (stage === 0 || stage === 2) {
    inputContent = (
      <>
        <input type='text'  placeholder={stage === 0 ? "What's your email?" : ""} />
      </>
    )
  }
  if (stage === 1) {
    inputContent = (
      <>
        <div className='button-box'>
          <button>$2K</button>
          <button>$5K</button>
          <button>No Limit</button>
        </div>
      </>
    )
  }
  
  return (
    <div className='input-content'>
      {inputContent}
    </div>
  )
}