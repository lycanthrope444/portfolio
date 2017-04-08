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
          I made this page using
          <a href="https://facebook.github.io/react/">
            React.js.
          </a>
          
        </div>
        <div>
          Contact Info
        </div>
        <LegalInfo />
      </LayoutView>
    )
  }
}

class LegalInfo extends React.Component{
  render(){
    return(
      <div>
        Legal Info
      </div>
    )
  }
}

module.exports={
  BiographyView
}
