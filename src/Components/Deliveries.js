import { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DeliveryForm from './DeliveryForm';
import DeliveryList from "./DeliveryList";
import DeliveryListItem from './DeliveryListItem';
import Data from "../Data/Data.json";
import backgroundImage from "../img/Scene.png";



class Deliveries extends Component {
    constructor(props) {
        super(props);

        this.state = {
            deliveries: []
        }

        this.eachDelivery = this.eachDelivery.bind(this);
        this.delete=this.delete.bind(this);
        this.addListItem =this.addListItem.bind(this);
        this.nextId=this.nextId.bind(this);
        this.update=this.update.bind(this);
        this.editForm = this.editForm.bind(this);

    }

    
    scene = {
        backgroundImage: `url(${backgroundImage})`,
        height: "800px",
        width: "1285px",
        left: "323px",
        top: "-3px",
    }

    
    componentDidMount() {
       Data.map(item => this.addListItem(item))
    }

    

    delete(id){
        this.setState(prevState => ({deliveries: prevState.deliveries.filter(listItem=>listItem.id !==id)}))
    }

    eachDelivery(item, i) {
        return <DeliveryListItem key={item.id} index={i+1} id={item.id} date={item.date} name={item.name} city={item.city} 
                    onDelete={this.delete} onEdit={this.update} ></DeliveryListItem>
    }

    addListItem({id=null, date= new Date(), name='default title', city=' defualt title'}){
        console.log([id, date, name, city])
        this.setState(prevState=>{
            let delivery = prevState.deliveries.find(item => item.id === id)
            
            if (delivery)
            {
                delivery.name = name;
                delivery.date = date;
                delivery.city = city
                return delivery;
            }

            return {deliveries:[...prevState.deliveries,{
                id: id !==null ? id : this.nextId(prevState.deliveries),
                date: date,
                name:name,
                city: city

            }]}
        })
    }

    nextId(deliveries=[]){
        let max= deliveries.reduce((prev, curr)=> prev.id> curr.id ? prev.id :curr.id, 0);
        return ++max;
    }

    update(id){
        this.setState(() => {
            let delivery = this.state.deliveries.find(item => item.id === id)
            return ({
                id: delivery.id,
                name: delivery.name,
                date: delivery.date,
                city: delivery.city
            })
        })
    }

    editForm(field, value) {
        this.setState({[field] : value})
    }

    render() {
        return (
            <Grid container spacing={3} style={this.scene}
                direction="row"
                justify="center"
                alignItems="flex-start">
                <Grid item xs>
                    <DeliveryList style={this.list}>
                        {this.state.deliveries.length > 0 && this.state.deliveries.map(this.eachDelivery)}
                    </DeliveryList>
                </Grid>
                <Grid item xs>
                    <DeliveryForm onSave={this.addListItem} onEdit={this.editForm} id={this.state.id} date={this.state.date} name={this.state.name} city={this.state.city} /> 
                </Grid>

            </Grid>


        )
    }
}

export default Deliveries;