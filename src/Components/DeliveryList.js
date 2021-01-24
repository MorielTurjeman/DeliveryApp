import React, { Component } from 'react';

class DeliveryList extends Component {
    constructor(props) {
        super(props);

    }

    table = {
        backgroundColor: 'white',
        position: 'relative',
        width: "550px",
    }

    fill = {
        height: '75%',
        fontSize: '540px'
    }
    
    div = {
        height: "585px",
        display: 'block',
        backgroundColor: "white",
        left: "100px",
        top: "113px",
        position: 'relative',
        paddingTop: "50px",
        paddingLeft: "50px",
        borderRadius: "10px",
        overflow:'auto',
        zIndex: '500'

    }

    render() {
        return (
            <div style={this.div}>
            <table style={this.table}>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
            </div>
        )
    }
}
export default DeliveryList;