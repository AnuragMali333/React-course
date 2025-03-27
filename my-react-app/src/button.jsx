function Button(props) {
  function handleClick() {
    alert(props.message); // Show a dynamic message
  }

  return <button onClick={handleClick}>{props.label}</button>;
}

export default Button;
