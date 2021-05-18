import './App.css';
import './tailwind.css'
import Canvas from './components/Canvas';

function App() {
	var socket = new WebSocket('wss://ws-pjpb.herokuapp.com/');
  

  return (
    <div className="App">
      <Canvas height={500} width={500} />
    </div>
  );
}

export default App;
