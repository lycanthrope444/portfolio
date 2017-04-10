var React = require('react');

class LayoutView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this);
    return(
      <div className="container">
        <NavBar activeTab={null} />
        {this.props.children}
      </div>
    )
  }
}

class NavBar extends React.Component{
  constructor(props){
    super(props);


    this.state={
      activeTab: ""
    }
  }
  render(){
    console.log(this);
    return(
      <div>
        <ul className="nav nav-tabs">
          <li role="presentation" >
            <a href="#">
              Home
            </a>
          </li>
          <li >
            <a href="#portfolio">
              Portfolio
            </a>
          </li>
          <li >
            <a href="#hobby">
              Hobbies
            </a>
          </li>
          <li >
            <a href="#biography">
              About
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

module.exports ={
  LayoutView
}
