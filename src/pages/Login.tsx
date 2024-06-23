import React from 'react';
import Header from '../components/Header/Header'
import Main from '../components/Login/Login'

const Login: React.FC = () => {      
    return (
        <>
            <Header
                title={'Login'}
            />
            <Main/>
        </>
    );
}

export default Login;