import React from 'react';
import SignUp from './SignUp';
import SearchBar from './SearchBar';
import DropDown from './Dropdown';

const MainHeader = () => {
    return (
        <>
            <SignUp />
            <SearchBar />
            <DropDown />
        </>
    );
};

export default MainHeader;