import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Landing from '../src/components/LandingPage/LandingPage.jsx'
import BrowseImagesPane from './components/BrowseImages/BrowseImagesPane';

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Route exact path='/' component={Landing} />
          <Switch>
            <Route exact path='/browse' component={BrowseImagesPane} />
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
