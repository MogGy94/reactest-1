import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './Components/Navigation';
import FormCreator from './Components/FormCreator';
import MyCard from './Components/MyCard';
import ExpandBar from './Components/ExpandBar';


import Timer from './Functionals/Timer';


import {data} from './data/data.json';

console.log(data);


class App extends Component {
  // constructor para verificar el estado de la aplicacion
  constructor(){
    super();
    this.state={
    title:"very sirius "  ,


    data,
    count: 0

    };
  }
//asdasd construyendo objeto html con react
  render() {
    //const time = <Timer/>;

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


        <Navigation titulo= "Moggy Data Count : " data = {<Timer/>}/>

        <div className="container">
            <div className="row mt-4">
              <ExpandBar titulo = "HOLAA" />
              <FormCreator/>
              {datas}
              <MyCard  />

              <MyCard test={true} msg={<Timer/>} />

            </div>
            <img src={logo} className="App-logo" alt="logo" />

        </div>

      </div>

    );
  }
}

export default App;
