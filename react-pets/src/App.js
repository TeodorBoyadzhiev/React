import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import EditPet from './components/EditPet/EditPet';
import Login from './components/Core/Login/Login';
import Register from './components/Core/Register/Register';
import './utils/firebase';

import './App.css';

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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
