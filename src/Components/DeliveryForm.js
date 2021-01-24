import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";



class DeliveryForm extends Component {
    
    constructor(props){
        super(props);

        this.add=this.add.bind(this);
    }

    style = {
        form : {
            top: "113px",
            left: "1094px",
            position: "absolute",
        },
        root: {
          flexGrow: 1
        },
        textField: {
          textAlign: "center",
          width: "400px",
          height: "60px",
          backgroundColor: 'white',
          border: "3px solid #ee4d47",
          borderRadius: "5px"
        },
        button: {
            backgroundColor: "#EE4D47",
            color: 'white'
        }
    };
    

    add(e) {
        e.preventDefault();
        console.log(this.props)
        let delivery = {id: this.props.id,  date: this.props.date, name: this.props.name, city: this.props.city}

        this.props.onSave(delivery);
    }

    updateFormField(name, value) {
        this.props.onEdit(name, value)
    }


    render() {
        return (
            <form style={this.style.form}>
                <Grid container spacing={1}
                        direction="column"
                        justify="center"
                        alignItems="center"
                        >
                        <Grid item xs={12}>
                            <TextField style={this.style.textField} value={this.props.date || ""} onChange={e => this.updateFormField('date', e.target.value)}
                                id="outlined-date-input"
                                label="Date"
                                type="text"
                                variant="filled"
                            
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={this.style.textField} value= {this.props.name || ""} onChange={e => this.updateFormField('name', e.target.value)}
                                id="outlined-date-input"
                                label="Name"
                                type="text"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField style={this.style.textField} value= {this.props.city || ""} onChange={e => this.updateFormField('city', e.target.value)}
                                id="outlined-date-input"
                                label="City"
                                type="text"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.add} variant="contained" style={this.style.button}  >Save</Button>
                        </Grid>
                </Grid>

            </form>

        )
    }

}

export default DeliveryForm;