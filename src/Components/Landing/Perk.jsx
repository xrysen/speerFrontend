import "./Perk.css";

const Perk = (props) => {
  return (
    <div className = "perk-container" style = {{ color: props.color}}>
      <div className = "perk-divider" style = {{ borderBottomColor: props.color}}></div>
      <h1>{props.title}</h1>
      <p className = "perk-description">{props.description}</p>
    </div>
  )
}

export default Perk;