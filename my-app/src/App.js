import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Hello />
      <Profile name="Ivica" lastname="Koteski" />
      <Message messagetxt="Ova e poraka za zdravo!" />
      <Counter />
    </div>
  );
}

export default App;
