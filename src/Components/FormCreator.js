import React , {Component} from 'react';

import MyInput from './MyInput';
import FormSelector from './FormSelector';


class FormCreator extends Component{

  constructor(){
    super();

    this.state ={
      ///estos osn los datos que se esperan recibir desde el servidor
      titulo: "" ,
      code: "",
      car:''

    };
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleInputChangeParent = this.handleInputChangeParent.bind(this)
  }

  handleSubmit (e) {
    console.log("submiting....");
    e.preventDefault();
    this.props.onUpData(this.state) //metodo del Padre
    console.log("FormState",this.state);
    this.setState({
      titulo: "" ,
      code: "",
      car:''
    });

  }

  handleInputChangeParent(e){// metodo enviado al hijo
    console.log("form",this.state);
    const {name,value} = e.target
    this.setState({
      [name]:value
    })

  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">

          <MyInput fun= {this.handleInputChangeParent} name= "titulo"/>
          <MyInput fun= {this.handleInputChangeParent} name= "code"/>
          <MyInput fun= {this.handleInputChangeParent} name= "car"/>

          <FormSelector holi= "Holi" chau = "chau" fun= {this.handleInputChange}/>
          <button type="submit" className="btn btn-primary">
            Save
          </button>

        </form>
      </div>
    )
  }

}
export default FormCreator;
