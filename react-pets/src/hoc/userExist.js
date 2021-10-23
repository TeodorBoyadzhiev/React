import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
// import Categories from '../components/Categories/Categories';


export default function userExist(WrappedComponent) {

    const Component = (props) => {
        const { isAuthenticated } = useContext(AuthContext);
        const history = useHistory();

        if (isAuthenticated) {
            history.push('/');

            return null;
        }

        return <WrappedComponent {...props} />
    }

    return Component;
}


