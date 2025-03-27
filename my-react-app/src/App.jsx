import "./App.css";
import Button from "./button";
import Greeting from "./greeting";

function App() {
  return (
    <div>
      <Greeting name="Anurag" />

      <p>Click the buttons to see different messages:</p>
      <Button label="Say Hello" message="Hello, Anurag! 👋" />
      <Button label="Show Alert" message="This is a custom alert!" />
      <Button label="Greet" message="Welcome to React events!" />
    </div>
  );
}

export default App;
