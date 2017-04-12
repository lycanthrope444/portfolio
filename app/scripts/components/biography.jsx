var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class BiographyView extends React.Component{
  render(){
    return(
      <div className="">
        <div className="personal-info-section">
          <h1 className="section-header">
            About Me
          </h1>
          <div>
            <p>
              I'm a recent graduate of the Iron Yard's immersive front-end
              engineering program in Greenville.
            </p>
            <p>
              I've been a lifelong fan of games in all their forms.
            </p>
          </div>
          <div>
            <p>
              I made this page using {" "}
              <span>
                <a href="https://facebook.github.io/react/">
                  React.js.
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

module.exports={
  BiographyView
}
