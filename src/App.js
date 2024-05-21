import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/homepage/HomePage";
import UseStateHook from "./components/hooks/UseStateHook";
import BasicForm from "./components/hooks/BasicForm";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <HomePage />
      <UseStateHook /> */}
      <BasicForm />
    </div>
  );
}

export default App;
