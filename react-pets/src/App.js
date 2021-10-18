import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Core/Header/Header';
import Footer from './components/Core/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import EditPet from './components/EditPet/EditPet';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import './utils/firebase';

import './App.css';
import { auth } from './utils/firebase';

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Categories} />
        <Route path="/categories/:category" component={Categories} />
        <Route path="/pets/details/:petId" component={PetDetails} />
        <Route path="/pets/edit/:petId" component={EditPet} />
        <Route path="/pets/create" component={CreatePet} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/logout" render={props => {
          auth.signOut();
          return <Redirect to="/" />
        }
        } />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
