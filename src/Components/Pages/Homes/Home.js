import React from 'react';
import Service from '../Services/Service';
import Client from '../Clients/Client';
import Header from '../../Shared/NavBar/Header/Header';
import Work from '../Works/Work';
import Message from '../Messages/Message';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Client></Client>
            <Work></Work>
            <Message></Message>
        </div>
    );
};

export default Home;