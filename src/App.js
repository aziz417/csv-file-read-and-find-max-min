import logo from './logo.svg';
import './App.css';
import CsvOperations from './components/CsvOperations';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CsvOperations />
      </header>
    </div>
  );
}

export default App;
