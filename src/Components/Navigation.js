import React,{Component} from 'react';

class Navigation extends Component{
   titulo : "asa";

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render(){

    return (

      <nav className = "navbar navbar-dar bg-dark">
          <a href = " Holi">
            {this.props.titulo}

            <span className="badge badge-pill badge-light" >
                {this.props.data}
            </span>
          </a>
      </nav>

    );
  }
}

export default Navigation;
