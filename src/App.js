import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import UseStateHook from "./components/hooks/UseStateHook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <UseStateHook />
    </div>
  );
}

export default App;
