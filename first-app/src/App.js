import './App.css';
import Heading from './components/Heading';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Content from './components/Content';
import notFound from './components/NotFound';
import Tutorial from './components/Tutorial';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="site-wrapper">
        <Heading />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/content' component={Content} exact />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route component={notFound} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
