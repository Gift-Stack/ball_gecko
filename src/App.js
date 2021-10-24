import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './component/app-layout';
import Home from './pages/home';
import Space from './pages/space';

function App() {
  return (
    <Router>
      <Switch>
        <AppLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/space" component={Space} />
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default App;
