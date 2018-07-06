import React,{Component} from 'react';


class FormSelector extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
      name:""
    };

    this.handleInputChange = this.handleInputChange.bind(this);// BIding
  }
  handleInputChange (e){
    console.log(e.target.value,e.target,e.target.name);
    const {value,name} = e.target;
    this.setState({
      [name]:value
    })
    console.log(this.state);
    console.log(this.props)
  };
  render() {
    //console.log(JSON.stringify(this.props));
    //console.log(JSON.stringify(this.state));
    return (

      <div className="form-group">
        <select
            name="priority"
            className="form-control"
            value={this.props.priority}
            onChange={this.handleInputChange}/// LLamado al metodo handleInputChange

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
