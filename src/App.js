import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <h1 className="title">User To-Do Table</h1>
      <p
        className="
paragraph"
      >
        User task table for effective planning.
      </p>
      <div className="main">
        <Form />
      </div>
    </div>
  );
}

export default App;
