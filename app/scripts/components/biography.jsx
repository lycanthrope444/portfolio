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
          <p>
            I'm a recent graduate of the Iron Yard in Greenville.
          </p>
          <p>

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
        <div>
          <p>
            Contact Info:
            <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/">
              LinkedIn
            </a>

            Email
            Phone
          </p>

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
