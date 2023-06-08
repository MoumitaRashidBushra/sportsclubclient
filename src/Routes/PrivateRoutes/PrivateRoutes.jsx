import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <progress className="progress w-56"></progress>
    }


    if (user) {
        return children;
    }

    // 

    if (!user) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Unauthorised',
            text: 'Please Login First',

        })

        return <Navigate state={{ from: location }} to="/login" replace></Navigate>
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate>
};

export default PrivateRoutes;