import React, {useState} from 'react';
import Meteor from './components/Meteor.jsx';
import Favorites from './components/Favorites.jsx';
import Welcome from './components/Welcome.jsx';
import * as meteorData from "./data.json"
import Info from './components/Info.jsx';
var isEqual = require('lodash.isequal');

function App(){
    const [favs, setFavs] = useState([]);  
    const [view, setView] = useState({thisMeteor: null});  
    const data = meteorData.default;

    const meteorsToReturn = data.map((meteor) => {
        return(
            <Meteor
                key = {meteor.name}
                meteorInfo = {meteor}
                updateFavs = {(meteor) => {setFavs([...favs, meteor])}}
                seeMore = {(meteor) => {
                    setView({thisMeteor: meteor});
                }}
            />
        );
    });

    if(view.thisMeteor == null){
        return(
            <div>
                <Favorites 
                    favorites = {favs}
                    seeMore={(meteor) => {
                        setView({ thisMeteor: meteor });
                    }}
                    removeFav={(key) => {
                        setFavs(favs.filter((favorite) => {
                            return (favorite.key == key);
                        }));
                    }}
                />
                <div className="container-fluid my-5">                    
                    <div className="row">
                        <div className="col-4"
                            style={{height: "80vh",
                                overflowY: "scroll"
                            }}>
                            {meteorsToReturn}
                        </div>
                        <div className="col">
                            <Welcome/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return(
            <div>
                <Favorites 
                    favorites={favs} 
                    seeMore={(meteor) => {
                        setView({ thisMeteor: meteor });
                    }}
                    removeFav={(meteor) => {
                        setFavs(favs.filter((favorite) => {
                            return isEqual(favorite, meteor);
                        }));
                    }}
                />
                <div className="container-fluid my-5">
                    <div className="row">
                        <div className="col-4"
                            style={{
                                height: "80vh",
                                overflowY: "scroll"
                            }}>
                            {meteorsToReturn}
                        </div>
                        <div className="col">
                             <Info 
                                meteor={view.thisMeteor}
                                resetViewCallback = {() => {
                                    setView({thisMeteor: null});
                                }}
                                />
                        </div>
                    </div>
                </div>
            </div>

        );
    };
};

export default App;