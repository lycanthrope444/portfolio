var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class BiographyView extends React.Component{
  render(){
    return(
      <div>
        <h1>
          About Me
        </h1>
        <div>
          <p>
            I'm a recent graduate of the Iron Yard in Greenville.
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
        <div>
          Contact Info:
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/">
                LinkedIn
              </a>
            </li>
            <li>
              Email
            </li>
            <li>
              Phone
            </li>
          </ul>

        </div>
        <LegalInfo />
      </div>
    )
  }
}

class LegalInfo extends React.Component{
  render(){
    return(
      <div>
        <p>
          Legal Info
        </p>
      </div>
    )
  }
}

module.exports={
  BiographyView
}
