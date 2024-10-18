import logo from "./logo.svg";
import "./App.css";
import Corousel from "./components/Corousel";
import Stars from "./components/Stars";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Stars />
      <Container />
      <div>
        <div className="bg-black">
          
        </div>
      </div>

      <div className="bg-black">
        <div className="bg-gradient-to-r from-blue-500 via-pink-500 via-emerald-400 to-black">
          <h2 class="p-6 text-2xl font-bold bg-gradient-to-r from-emerald-500 via-pink-500 to-sky-400 inline-block text-transparent bg-clip-text">
            hello world
          </h2>
          <Corousel />
        </div>
      </div>
    </div>
  );
}

export default App;
