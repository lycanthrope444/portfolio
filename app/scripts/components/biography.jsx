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
              I am a recent graduate of the Iron Yard's immersive front-end
              engineering program in Greenville. My skillset includes HTML, CSS
              and JavaScript. I have spent a significant amount of time focusing
              on React.js and component-based architecture. Coding provides an
              excellent outlet for my desire to create as well as providing a
              way for me to solve logic puzzles.
            </p>
            <p>
              I have been a lifelong fan of games in all their forms. I also think
              that superhero stories are a modern form of mythology. Ask me about
              either subject if you would like to spend a few hours discussing
              these subjects.
            </p>
            <p>
              I made this page using {" "}
              <span>
                <a href="https://facebook.github.io/react/">
                  React.js
                </a>
                {" "}
                and
                {" "}
                <a href="http://getbootstrap.com/">
                  Bootstrap.
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
