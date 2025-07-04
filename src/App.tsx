import './App.css';
import { products } from './assets/data';
import { Filters } from './components/Filters/Filters';

function App() {
  return (
    <>
      <Filters products={products} />
    </>
  );
}

export default App;
