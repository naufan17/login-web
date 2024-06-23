import React from 'react';
import Header from '../components/Header/Header'
import Main from '../components/Register/Register'

const Register: React.FC = () => {      
    return (
        <>
            <Header
                title={'Register'}
            />
            <Main/>
        </>
    );
}

export default Register;