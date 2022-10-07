
export default function TomatoContainer(props) {

  console.log(props.number);

  let tomatoes = []

  for (let i=0; i < props.number; i++) {
    tomatoes.push("🍅");
  }
  
  const tomatoString = tomatoes.join("");

  return (
    <div className ="rendered-tomatoes">
      <h4>{!props.number ? "No tomatoes yet" : tomatoString}</h4>
    </div>
  )
}