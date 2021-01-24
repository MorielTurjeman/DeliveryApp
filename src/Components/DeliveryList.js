import { Block } from '@material-ui/icons';
import React, { Component } from 'react';

class DeliveryList extends Component {
    constructor(props) {
        super(props);

        console.log(props.children)
    }

    table = {
        backgroundColor: 'white',
        position: 'absolute',
        width: "550px",
        left: "506px",
        top: "113px",
        borderRadius: "10px",
        overflow:'scroll',
    }

    fill = {
        height: '75%',
        fontSize: '540px'
    }
    
    div = {
        height: "594px"
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