import './App.css';
import './tailwind.css'
import Canvas from './components/Canvas';

function App() {
  
  const socket = new WebSocket('ws://localhost:3001');

  return (
    <div className="App">
      <Canvas height={500} width={500} socket={socket} />
    </div>
  );
}

export default App;
