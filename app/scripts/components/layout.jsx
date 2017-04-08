var React = require('react');

class LayoutView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

class NavBar extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <a href="#">
          Home
        </a>
        <a href="#portfolio">
          Portfolio
        </a>
        <a href="#hobby">
          Hobbies
        </a>
        <a href="#biography">
          About
        </a>
      </div>
    )
  }
}

module.exports ={
  LayoutView
}
