import "./App.css";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
function App() {
  return (
    <div>
      <NavBar />
      <div class="container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
