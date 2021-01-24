import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import image from "./img/mobel.png";
import Deliveries from './Components/Deliveries';
class App extends Component {

    carStyle = {
        float: "left",
        left: "10%",
        top: "-100px",
        position: "relative",
    }

    render() {
        return (<React.Fragment>
            <CssBaseline />
                <Deliveries/>
                <img src={image} style={this.carStyle}/>
        </React.Fragment>)

    }
}

export default App;