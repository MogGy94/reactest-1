import React from 'react';
import Chart from 'chart.js';

export class  MyCard extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        titulo : "Card Title",
        num   : 0,
        msg    : "Nuevo Mensaje de la card ",
        test: true
      };

    setTimeout(()=> {
      this.setState ({
        num    : this.state.num + 10,
      });
    },4000 );

  }
  updateState(){
    this.setState({
      titulo :  this.props.titulo,
      num   : this.props.code,
      msg    : this.props.msg,

    });

  }
  handleContador(){
      this.setState(
        {
        num: this.state.num + 1
        }
    );
  }

  componentDidMount() {// este metodo se ejecuta contantemente un metodo de chequee constante
    this.setState({
      titulo :  this.props.titulo,
      num   : this.props.num,
      msg    : this.props.msg,
    });
  }

  render(){
    //console.log("Card Component");
    if(this.state.test){
    //  console.log(this.state);
    }

    return(
      <div className="col-md-4">
        <div className="card mt-4">
          <div className= "card-header">
            <h1>{this.state.titulo+" "+this.state.num}</h1>
            <span className="badge badge-pill badge-danger">
              {"code: "+this.state.code}
            </span>
          </div>
            <div className= "card-body">
                <mark>{this.state.msg}</mark>
            </div>
            <button onClick = {()=> this.handleContador()} type="submit" className="btn btn-primary">
              Count
            </button>

        </div>
      </div>

    );
  }
}

export default MyCard;
