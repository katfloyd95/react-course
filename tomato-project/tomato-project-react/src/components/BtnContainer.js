
export default function BtnContainer({number, setNumber}) {

  function AddNumber() {
    return (
      setNumber(number + 1)
    )
  }

  function SubNumber() {
    return (
      setNumber(number - 1)
    )
  }

  return (
    <div className="btn-container">
      <button onClick={SubNumber} >-</button>
      <button onClick={AddNumber} >+</button>
    </div>
  )
}