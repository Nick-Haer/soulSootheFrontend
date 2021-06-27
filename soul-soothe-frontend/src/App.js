import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/browse' component={SignUp} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/poems' component={GuestPoemSearch} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
