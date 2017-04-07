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
        Nav Bar Holder
      </div>
    )
  }
}

module.exports ={
  LayoutView
}
