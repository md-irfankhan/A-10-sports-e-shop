import { useAuth } from '../../AuthProvider/AuthProvider';
import {useLocation,Navigate} from 'react-router'
import Spinner from '../Spinner/Spinner'
const Private = ({children}) => {
    const location=useLocation();
    const {user,loading}=useAuth();
    if(loading){
        return <Spinner></Spinner>
    }
    if(user){
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname}  to='/login'></Navigate>
            
        </div>
    );
};

export default Private;