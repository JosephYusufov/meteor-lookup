import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    };

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    tick() {
        this.setState({
            date: new Date()
        });
    };

    render() {
        return(
            <div class="jumbotron">
                <h1 class="display-4">It is currently: {this.state.date.toLocaleTimeString()}</h1>
                <p class="lead">Made using ReactJS and Bootstrap 5</p>
            </div>
        );
    };
};

export default Clock;