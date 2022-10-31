import './App.css';
import image from './shopping.webp'
import man from './man.webp'
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className="App">
      <img src={image} width="250px" alt="shopping"/>
      <h1>Grocery list</h1>
      <GroceryList />
      <img src={man} width="250px" alt="man"/>
    </div>
  );
}

export default App;
