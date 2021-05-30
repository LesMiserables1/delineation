import './App.css';
import './tailwind.css'
import Canvas from './components/Canvas';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  
  const socket = new WebSocket('ws://localhost:3001');

  return (
    <div className="App">
      <Container>
        <Header text="delineation" />
        <Canvas height={500} width={500} socket={socket} />
      </Container>
    </div>
  );
}

export default App;
