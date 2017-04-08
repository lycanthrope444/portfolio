var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class BiographyView extends React.Component{
  render(){
    return(
      <LayoutView>
        <h1>
          About Me
        </h1>
        <div>
          I'm a recent graduate of the Iron Yard in Greenville.
        </div>
        <div>
          Contact Info
        </div>
      </LayoutView>
    )
  }
}

module.exports={
  BiographyView
}
