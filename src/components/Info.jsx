import React from 'react';

function Info(props){
    const backButtonHandler = () => {
        props.resetViewCallback();
    }
    return(
        <div>
            <h1 style={{}}>{props.meteor.name}</h1>
            <button style={{float: "right"}} className="btn btn-outline-primary" onClick={backButtonHandler}>Go Back</button>
            <h3>Year: {props.meteor.year}</h3>
            <h3>Class: {props.meteor.class}</h3>
            <h3>Mass: {props.meteor.mass / 1000} kg</h3>
            <img 
                src={`https://open.mapquestapi.com/staticmap/v4/getmap?key=aRnYU9tKUGKyRp9XYVAyS1V6Tcke5mAD&size=600,400&zoom=5&center=${props.meteor.reclat},${props.meteor.reclong}&pois=1,${props.meteor.reclat},${props.meteor.reclong},-20,-20`} 
                alt={props.meteor.name}
                style={{
                    width: "100%"
                }}
            />
        </div>
    );
};

export default Info