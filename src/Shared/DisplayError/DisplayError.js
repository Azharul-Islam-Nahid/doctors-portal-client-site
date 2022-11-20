import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const DisplayError = () => {


    const navigate = useNavigate();

    const { logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(err => console.log(err));
    }

    const error = useRouteError();
    return (
        <div>
            <p className="text-red-500">Oops! Something Went Wrong!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className="text-3xl"><button onClick={handleSignOut}>Sign out & log in again</button></h4>
        </div>
    );
};

export default DisplayError;