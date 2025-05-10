import logo from "/logo.png";
import "./App.css";
import WaveBorder from "./components/WaveBorder";

function App() {
  return (
    <>
      <img src={logo} className="logo" alt="codeCosta logo" />
      <h1>Welcome</h1>
      <WaveBorder lowerColor="#FFFFFF" />
    </>
  );
}

export default App;
