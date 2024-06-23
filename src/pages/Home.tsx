import React from 'react';
import Header from '../components/Header/Header'

const Home: React.FC = () => {      
    return (
        <Header
            title={'Click the Button Below to Login'}
            login={true}
        />
    );
}

export default Home;