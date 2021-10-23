import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AppLayout from './component/app-layout';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <Switch>
        <AppLayout>
          <Route exact path="/" component={Home} />
        </AppLayout>
      </Switch>
    </Router>
  );
}

export default App;
