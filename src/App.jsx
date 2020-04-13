import React, {useState} from 'react';
import Meteor from './components/Meteor.jsx';
import Favorites from './components/Favorites.jsx';
import * as meteorData from "./data.json"
import Info from './components/Info.jsx';

function App(){
    const [favs, setFavs] = useState([]);  
    const [view, setView] = useState({thisMeteor: null});  
    const data = meteorData.default;

    const meteorsToReturn = data.map((meteor) => {
        return(
            <Meteor
                key = {meteor.name}
                meteorInfo = {meteor}
                updateFavs = {(meteor) => setFavs([...favs, meteor])}
                seeMore = {(meteor) => {
                    setView({thisMeteor: meteor});
                }}
            />
        );
    });

    if(view.thisMeteor == null){
        return(
            <div>
                <Favorites favorites = {favs}/>
                {meteorsToReturn}
            </div>
        );
    } else {
        return(
            <div>
                <Favorites favorites = {favs}/>
                <Info 
                    meteor = {view.thisMeteor} 
                    resetViewCallback = {() => {
                        setView({thisMeteor: null});
                    }}
                    />
            </div>
        );
    };
};

export default App;