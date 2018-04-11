import React, { Component } from 'react';
import './App.css';
import {Form, Col, Button, Panel , Accordion, ButtonToolbar} from 'react-bootstrap';
import CustomComponent from './CustomComponent';
import EditRecipe from './EditRecipe';
import AddRecipe from './AddRecipe';
import TestComponent from './test';



class App extends Component {
  constructor(props){
    super(props);
    //this.deleteRecipe = this.deleteRecipe.bind(this);
    this.state = {
      data : [
          {name:'pie',
           ingredients: ['a','b'
            ]},
          {name:'sandwitch',
            ingredients: ['c','d','f','g'
            ]}
            ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);

  }




  deleteRecipe(item,index){
    console.log(item);
    console.log(index);

    const newState = this.state.data;
    //console.log(newState.indexOf(item));

  newState.splice(index, 1);

  this.setState({data: newState})
//console.log(this.state.data);
//console.log(newState);

  }

  handleSubmit(event){
    this.setState({
        data: this.state.data.concat(event)
    }, () => console.log(this.state.data));
    //localStorage.setItem('myData', JSON.stringify(event));

  }

  handleEdit(event,index){
    const newState = this.state.data;
    newState.splice(index, 1,event);
    console.log(newState);
    this.setState({
      data: newState
    });
  }

  componentWillMount() {
  //alert('component is about to mount!');
  if (!localStorage.hasOwnProperty('myData')){
    localStorage.setItem('myData', JSON.stringify(this.state.data));
  }
  if (localStorage.myData !== JSON.stringify(this.state.data)){
    this.setState({data:JSON.parse(localStorage.getItem('myData'))})
    console.log(localStorage.getItem('myData'));
    console.log(this.state.data);

}
}

  componentDidMount(){
    //alert('component did mound');
    console.log(this.state.data);
  }

  render() {

     console.log(this.state.data);
     const data = this.state.data;
     localStorage.setItem('myData', JSON.stringify(this.state.data));

     //const data = this.state.data;
     //localStorage.setItem('myData', JSON.stringify(data));
     console.log(localStorage.myData);
     console.log(localStorage.hasOwnProperty("myData"));
    //console.log(localStorage.getItem('myData'));
    //const data1 = JSON.parse(localStorage.getItem('myData'));
    //console.log(data1);

    const accordionInstance1 =
    data.map((item,index)=>
     <Panel header={item.name} key={item.name.toString()} eventKey={index+1}  bsStyle="primary">
       <CustomComponent children={item.ingredients} />

           <EditRecipe currentRecipe={this.handleEdit} indexOf={index} recipe={item.name} ingredients={item.ingredients}/>

         <ButtonToolbar>
           <Button bsStyle="danger" onClick={this.deleteRecipe.bind(this,item,index)}>Delete</Button>
         </ButtonToolbar>

    </Panel>
    );


    return (
      <div className="App">
        <Accordion>{accordionInstance1}</Accordion>
        <AddRecipe onSubmit={this.handleSubmit}/>
      </div>

    );
  }
}

export default App;
