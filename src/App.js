import React from "react";

// create your App component here
export default class App extends React.Component {
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(json => console.log(json))
    }
    
    render() {
        return(
            <div></div>
        )
    }
}