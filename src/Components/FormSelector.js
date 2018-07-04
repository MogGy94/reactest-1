import React,{Component} from 'react';

import {MyInput,handleInputChange} from './MyInput';


class FormSelector extends Component{
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  render() {
    //console.log(JSON.stringify(this.props));
    //console.log(JSON.stringify(this.state));
    return (

      <div className="form-group">
        <select
            name="priority"
            className="form-control"
            value={this.props.priority}
            onChange={handleInputChange}/// LLamado al metodo handleInputChange
          >
          <option>low</option>
          <option>medium</option>
          <option>high</option>
        </select>

      </div>

          );
  }

}

export default FormSelector;
