import React,{Component} from 'react';

export function handleInputChange (e){
  console.log(e.target.value,e.target,e.target.placeholder,e.target.ti);

};

class MyInput extends Component{
  constructor(props){
    super(props);
    this.state = {
      titulo :  "asdasda"
    }

  }

  componentDidMount(){
    this.setState(
      {
      //  titulo: this.props.titulo
      }
    );
  }
  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          ti={this.state.titulo}
          onChange={this.handleInputChange}
          placeholder= {this.props.titulo}
          />
      </div>
    );
  }

}

export default MyInput;
