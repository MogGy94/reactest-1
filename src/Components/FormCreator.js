import React , {Component} from 'react';

import MyInput from './MyInput';

class FormCreator extends Component{
  constructor(){
    super();
    this.state ={
      ///estos osn los datos que se esperan recibir desde el servidor
      title:'',
      code:'',
      car:''

    };

  }
  handleInputChange(){
    console.log("writting....");

  }
  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <MyInput titulo= "holi"/>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              value={this.state.responsible}
              onChange={this.handleInputChange}
              placeholder="Responsible"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Description"
              />
          </div>
          <div className="form-group">
            <select
                name="priority"
                className="form-control"
                value={this.state.priority}
                onChange={this.handleInputChange}/// LLamado al metodo handleInputChange
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}
export default FormCreator;
