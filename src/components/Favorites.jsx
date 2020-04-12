import React from 'react';

function Favorites(props) {
    const favsToReturn = props.favorites.map((favorite) => {
        return( 
            <span>{favorite}</span>
        );
    });
    // console.log(props);
    return(
        <nav className="navbar fixed-top navbar-light bg-light">
            <span className="navbar-brand">Favorites</span>
            {favsToReturn}
        </nav>    
    );
};

export default Favorites;