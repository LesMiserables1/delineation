import React from 'react';
import './App.css';
import './tailwind.css'
import Container from './components/Container';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Room from './pages/Room';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {

  return (
    <div className="App">
      <Container>
        <BrowserRouter>
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