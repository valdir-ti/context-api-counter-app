import './App.css';
import { Counter } from './components/Counter';
import { Decrease } from './components/Decrease';
import { Increase } from './components/Increase';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter App using Context API</h2>
        <div className='counter-container'>
          <Counter />
          <div className='buttons-container'>
            <Increase />
            <Decrease />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
