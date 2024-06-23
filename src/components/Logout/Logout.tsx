import React, { useEffect } from 'react';
import { useAuth } from '../../middleware/AuthProvider';

const Logout: React.FC = () => {
    const { logout } = useAuth();

    const logoutUser = async () => {
        try {
            logout();
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        logoutUser();
    }, [])

    return null
}

export default Logout;