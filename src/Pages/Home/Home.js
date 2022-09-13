import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Books from '../Books';

const Home = () => {
    return (
        <Navbar>
            <Books></Books>
        </Navbar>
    );
};

export default Home;
