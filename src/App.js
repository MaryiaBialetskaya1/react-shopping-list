import "./App.css";
import image from "./shopping.webp";
import man from "./man.webp";
import { GroceryList } from "./GroceryList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={image} width="250px" alt="shopping" />
      </div>
      <div className="container">
        <h1>Grocery list</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={man} width="250px" alt="man" />
      </div>
    </div>
  );
}

export default App;
