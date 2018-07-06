import React from 'react';

class Item extends React.Component{
  // Item de la lista
  constructor(props){
    super(props);
      this.state = {
        titulo: ""
      }

  }

  componentDidMount(){
    if(this.props.titulo!= null){
    this.setState(
      {
        titulo: this.props.titulo
      }
    );
    }

  }
  render(){
    return(
      <li className="nav-item ">
        <a className="nav-link" href="#">{this.state.titulo} <span className="sr-only">(current)</span></a>
      </li>
    );
  }

};

Item.defaultProps={
  titulo:"Default Tit"
}




// lista de Items
class ExpandBar extends React.Component{

  constructor(props){
    super(props);
    this.state={
      titulo : "Ha"

    }

  }
  componentDidMount() {
    if(this.props.titulo!= null){
    this.setState(
      {
        titulo: this.props.titulo
      }
    );
    }
  }

  render(){
    //console.log(this.state);
    return(
      <nav className="navbar navbar-dark bg-dark mr-3">
      <a className="navbar-brand" href="#">{this.state.titulo}</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample01">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">Disabled</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div className="dropdown-menu" aria-labelledby="dropdown01">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <Item/>
        </ul>
        <form className="form-inline my-2 my-md-0">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
        </form>
      </div>
    </nav>

    )


  };

};
ExpandBar.defaultProps = {
  titulo: "ExpandBar"
}



export default ExpandBar;
