import './utils/firebase';
import './App.css';

import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Core/Header/Header';
import Footer from './components/Core/Footer/Footer';
import Categories from './components/Categories/Categories';
import PetDetails from './components/PetDetails/PetDetails';
import CreatePet from './components/CreatePet/CreatePet';
import EditPet from './components/EditPet/EditPet';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';

import { auth } from './utils/firebase';
import { useEffect, useState } from 'react/cjs/react.development';
import { onAuthStateChanged } from '@firebase/auth';

import AuthContext from './contexts/AuthContext';
import isAuth from './hoc/isAuth';
import userExist from './hoc/userExist';

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
      <AuthContext.Provider value={authInfo}>
        <Header />

        <Switch>
          <Route path="/" exact component={Categories} />
          <Route path="/categories/:category" component={Categories} />
          <Route path="/pets/details/:petId" component={isAuth(PetDetails)} />
          <Route path="/pets/edit/:petId" component={isAuth(EditPet)} />
          <Route path="/pets/create" component={isAuth(CreatePet)} />
          <Route path="/register" component={userExist(Register)} />
          <Route path="/login" component={userExist(Login)} />
          <Route path="/logout" render={props => {
            auth.signOut();
            return <Redirect to="/" />
          }
          } />
        </Switch>

        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
