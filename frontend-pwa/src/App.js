import React from 'react';
import './tailwind.css'
import Container from './components/Container';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Room from './pages/Room';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Navbar from './components/ui/Navbar';

function App() {
  
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/room" component={Room} exact />
          </Switch>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
