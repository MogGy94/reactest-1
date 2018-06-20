import React,{Component} from 'react';

class MyInput extends Component{


  render() {
    return (
      <div className="form-group">
        <input
          type="text"
          //name="title"
          className="form-control"
          value={this.props.title}
          onChange={this.handleInputChange}
          placeholder="Title"
          />
      </div>
    );
  }

}

export default MyInput;
