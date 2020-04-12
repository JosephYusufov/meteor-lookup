import React, {useState} from 'react';
import Meteor from './components/Meteor.jsx';
import Favorites from './components/Favorites.jsx';
import * as meteorData from "./data.json"

function App(){
    // console.log(meteorData.default);
    const [favs, setFavs] = useState([]);    
    const data = meteorData.default;
    const callback = (meteorName) => {
        setFavs([...favs, meteorName]);
    }
    const toReturn = data.map((meteor) => {
        return(
            <Meteor
                meteorInfo = {meteor}
                updateFavs = {callback}
            />
        );
    });

    return(
        <div>
            <Favorites
                favorites = {favs}
            />
            {toReturn}
        </div>
    );
};

export default App;