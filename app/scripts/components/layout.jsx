var React = require('react');

class LayoutView extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        Nav Placeholder
        {this.props.children}
      </div>
    )
  }
}

module.exports ={
  LayoutView
}
