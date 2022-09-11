import React from 'react';

const NavLinks = () => {
    const links = [{ name: "Fiction" }, { name: "Non Fiction" }, { name: "e-Books" }, { name: "Audio Books" }, { name: "Teens & YA" }, { name: "Kids" }, { name: "Toys and Games" }]
    return (
        <>
            {links.map(link => (
                <div key={link.name}>
                    <div>
                        <h1>{link.name}</h1>
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;