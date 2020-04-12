import React from 'react';

function Meteor(props){
    const sendFavorite = () => {
        props.updateFavs(props.meteorInfo.name);
    };
    return(
        <div className="jumbotron">
            <h1 className="display-4">Name: {props.meteorInfo.name}</h1>
            <p className="lead">Year: {props.meteorInfo.year}</p>
            <p className="lead">Lattitude: {props.meteorInfo.reclat}</p>
            <p className="lead">Longitude: {props.meteorInfo.reclong}</p>
            <button className="btn btn-primary" onClick={sendFavorite}>Favorite</button>
        </div>
    );
}

export default Meteor;