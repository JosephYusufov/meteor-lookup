import React from 'react';

function Favorites(props) {
    const favsToReturn = props.favorites.map((favorite) => {
        return( 
            <span>
                <button 
                    className="btn btn-outline-primary"
                    onClick={() => {props.seeMore(favorite.meteorInfo)}}>
                        {favorite.meteorInfo.name}
                </button>
                <button 
                    onClick={() => {props.removeFav(favorite.key)}}
                    className="btn btn-danger"
                    >X</button>
            </span> 
        );
    });
    

    // console.log(props);
    return(
        <nav className="navbar fixed-top navbar-light bg-light d-flex justify-content-around">
            <span className="navbar-brand">Favorites</span>
            {favsToReturn}
        </nav>    
    );
};

export default Favorites;