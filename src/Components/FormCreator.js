import React , {Component} from 'react';

import MyInput from './MyInput';
import FormSelector from './FormSelector';


class FormCreator extends Component{

  constructor(){
    super();

    this.state ={
      ///estos osn los datos que se esperan recibir desde el servidor
      title: "" ,
      code: "",
      car:''

    };

  }
  handleInputChange () {
    console.log("writting....");

  }
  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">

          <MyInput titulo= "TaskName"/>
          <MyInput titulo= "TaskPrioiti"/>
          <MyInput titulo= "TaskCode"/>
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
