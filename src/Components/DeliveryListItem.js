import { Fab } from '@material-ui/core';
import { Delete, Edit } from '@material-ui/icons';
import React, { Component } from 'react';



class DeliveryListItem extends Component {
    
    constructor(props) {
        super(props);
        this.delete= this.delete.bind(this);
        this.update= this.update.bind(this);
      
        

    }
    
    delete() {
        this.props.onDelete(this.props.id);
    }

    update(){
        this.props.onEdit(this.props.id)
    }

    
    
    render() {
        return (
            <tr style={this.row}>

                <td>{this.props.index}</td>
                <td>{this.props.date}</td>
                <td>{this.props.name}</td>
                <td>{this.props.city}</td>
                <td>
                    <Fab size="small" color="secondary" aria-label="update" onClick={this.update}>
                        <Edit />
                    </Fab>
                </td>
                <td>
                    <Fab size="small" color="secondary" aria-label="update" onClick={this.delete}>
                        <Delete />
                    </Fab>
                </td>
            </tr>
        )





    }

}
export default DeliveryListItem;