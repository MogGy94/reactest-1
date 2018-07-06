import React,{Component} from 'react';


class MyInput extends Component{
  constructor(props){
    super(props);
    this.state = {

      titulo :  ""

    }
    this.handleInputChange =  this.handleInputChange.bind(this);  // BIding
  }

  handleInputChange (e){// metodo para obtencion de datos desde ui
   //console.log(e.target.value,e.target,e.target.name);
   this.props.fun;
   const {value,name} = e.target;
   this.setState({
     [name]:value
   })
   console.log("INputState",this.state);
  };





  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name = {this.props.name}
          ti={this.state.titulo}

          onChange={this.props.fun}
          placeholder= {this.props.titulo}
          />
      </div>
    );
  }

}

export default MyInput;
