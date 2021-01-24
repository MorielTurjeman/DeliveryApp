import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import image from "./img/mobel.png";
import Deliveries from './Components/Deliveries';
class App extends Component {

    carStyle = {
        top: "720px",
        left: "100px",
        position: "absolute"
    }

    render() {
        return (<React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Deliveries/>
                <img src={image} style={this.carStyle}/>
            </Container>
        </React.Fragment>)

    }
}

export default App;