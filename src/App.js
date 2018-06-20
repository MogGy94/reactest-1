import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import FormCreator from './Components/FormCreator';
import MyInput from './Components/MyInput';


import {data} from './data/data.json';

console.log(data);


class App extends Component {
  // constructor para verificar el estado de la aplicacion
  constructor(){
    super();
    this.state={
    title:"very sirius "  ,
    data
    };
  }
//asdasd construyendo objeto html con react
  render() {
    const datas = this.state.data.map((data,i) => {
      return(
      <div className="col-md-4">
        <div className="card mt-4">
          <div className= "card-header">
            <h1>{data.titulo}</h1>
            <span className="badge badge-pill badge-danger">
              {"code: "+data.code}
            </span>
          </div>
            <div className= "card-body">
                <mark>{data.car}</mark>
            </div>
        </div>
      </div>
      )
    })

    return (
      <div className="App">

        <Navigation titulo= "holi"/>
        <Navigation />
        <Navigation titulo= "ASDASD"/>
        <Navigation titulo= "Moggy Data Count : " data = {this.state.data.length}/>

        <div className="container">
            <div className="row mt-4">
              <FormCreator/>
              {datas}
            </div>
            <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>

    );
  }
}

export default App;
