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
import { useEffect, useState } from 'react/cjs/react.development';
import { onAuthStateChanged } from '@firebase/auth';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      setUser(authUser)
    })
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email
  }


  return (
    <div className="container">
      <Header {...authInfo} />

      <Switch>
        <Route path="/" exact component={Categories} {...authInfo} />
        <Route path="/categories/:category" component={Categories} {...authInfo} />
        <Route path="/pets/details/:petId" component={PetDetails} {...authInfo} />
        <Route path="/pets/edit/:petId" component={EditPet} {...authInfo} />
        <Route path="/pets/create" component={CreatePet} {...authInfo} />
        <Route path="/register" component={Register} {...authInfo} />
        <Route path="/login" component={Login} {...authInfo} />
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
