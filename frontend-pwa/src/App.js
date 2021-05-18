import './App.css';
import './tailwind.css'
import Canvas from './components/Canvas';

function App() {
	var socket = new WebSocket('wss://ws-pjpb.herokuapp.com/');
  

  return (
    <div className="App">
      <Canvas />
    </div>
  );
}

export default App;
