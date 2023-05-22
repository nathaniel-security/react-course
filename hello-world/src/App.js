import logo from './logo.svg';
import './App.css';
import Message from './components/message';
import Hello_name from './components/name';
import Test from './components/test';
import test_child from './components/test_child';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Test />


      </header>
    </div>
  );
}

export default App;
