import React from 'react';

function Welcome(){
    return(
        <div>
            <h1 className="text-center display-4">Welcome to the Meteor Lookup Tool</h1>
            <hr></hr>
            <h1>Get Started</h1>
            <h5>Browse through the meteors on the left. Click the <b>See More</b> button on any meteor to load more information, or click the <b>Add to Favoirtes</b> button to add the meteor to the favorites bar on the top of the page.</h5>
            <br/>
            <h5>Click on any of your favorite meteors to jump to that meteor, or delete them altogether.</h5>
        </div>
    );
};

export default Welcome;