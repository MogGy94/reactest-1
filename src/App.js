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
    this.updateData = this.updateData.bind(this);
  }


  updateData(dat){// metodo enviado al hijo
    this.setState({
        data :[...this.state.data,dat]
    });
  }

//asdasd construyendo objeto html con react
  render() {
    //const time = <Timer/>;

    const datas = this.state.data.map((data,i) => {
      return(
      <MyCard titulo={data.titulo} num={data.code}  msg={data.car}  />

      )
    })

    return (
      <div className="App">


        <Navigation titulo= "Moggy Data Count : " data = {<Timer/>}/>

        <div className="container">
            <div className="row mt-4">
              <ExpandBar titulo = "HOLAA" />
              <FormCreator onUpData={this.updateData}/> {/*Biding metodo padre-->hijo*/}
              {datas}
              <MyCard titulo="HOLA" num={2}  msg="{data.car}"  />
              <MyCard titulo="FATS" num={5}  msg={<Timer/>} />

            </div>
            <img src={logo} className="App-logo" alt="logo" />

        </div>

      </div>

    );
  }
}

export default App;
