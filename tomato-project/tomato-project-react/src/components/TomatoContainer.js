
export default function TomatoContainer(props) {

  console.log(props.number);

  let tomatoes = []

  for (let i=0; i < props.number; i++) {
    tomatoes.push("🍅");
  }
  
  const tomatoString = tomatoes.join("");

  return (
    <div className ="rendered-tomatoes">
      <h6>{!props.number ? " " : tomatoString}</h6>
    </div>
  )
}