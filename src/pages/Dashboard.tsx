import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header'

const Dashboard: React.FC = () => { 
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        if (storedUsername){
            setUsername(storedUsername);
        }
    }, [])

    return (
        <Header
            title={`Hello ${username}, Have a Nice Day!`}
            logout={true}
        />
    );
}

export default Dashboard;