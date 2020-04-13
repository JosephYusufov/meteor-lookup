import React from 'react';

function Meteor(props){
    const sendFavorite = () => {
        props.updateFavs(props);
    };

    const seeMore = () => {
        props.seeMore(props.meteorInfo);
    };
    return(
        <div className="card my-2">
            <h1 className="card-header">{props.meteorInfo.name}</h1>
            <div className="cardbody mx-3 my-3">                
                <p className="lead">Year: {props.meteorInfo.year}</p>
                <p className="lead">Lattitude: {props.meteorInfo.reclat}</p>
                <p className="lead">Longitude: {props.meteorInfo.reclong}</p>
                <button className="btn btn-primary mx-2" onClick={sendFavorite}>Favorite</button>
                <button className="btn btn-primary mx-2" onClick={seeMore}>See More</button>
            </div>
        </div>
    );
}

export default Meteor;