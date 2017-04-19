var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class BiographyView extends React.Component{
  render(){
    return(
      <div className="personal-info-section">
        <h1 className="section-header">
          About Me
        </h1>
        <div className="col-sm-6">
          <h3 className="small-header">
            Coding
          </h3>
          <p>
            I am a recent graduate of the Iron Yard's immersive front-end
            engineering program in Greenville. My skillset includes HTML, CSS
            and JavaScript. I have spent a significant amount of time focusing
            on React.js and component-based architecture. Coding provides an
            excellent outlet for my desire to create as well as providing a
            way for me to solve logic puzzles.
          </p>
          <p>
            I made this page using {" "}
            <span className="text-link">
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
          <h3 className="small-header">
            Hobbies
          </h3>
          <p>
            I have been a lifelong fan of games in all their forms. I also think
            that superhero stories are a modern form of mythology. I enjoy
            stories about giant robots and dragons. Ask me about any of these
            things if you would like to spend a few hours locked in a heated
            debate about trivial topics.
          </p>
        </div>
        <div className="col-sm-6">
          <ContactInfo />
        </div>
      </div>
    )
  }
}

class ContactInfo extends React.Component{
  render(){
    return(
      <div>
        <h3 className="small-header">
          Contact Info
        </h3>
        <div className="col-sm-6">
          <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/"
            className="contact-link">
            <div className="contact-box">
              <span className="contact-name">
                LinkedIn
              </span>
              <span className="font-icon">
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              </span>
            </div>
          </a>
          <a href="https://github.com/lycanthrope444" className="contact-link">
            <div className="contact-box">
              <span className="contact-name">
                GitHub Profile
              </span>
              <span className="font-icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </span>
            </div>
          </a>
        </div>
        <div className="col-sm-6">
          <a href="mailto:nathanstarwalt@gmail.com" className="contact-link">
            <div className="contact-box">
              <span className="contact-name">
                Email
              </span>
              <span className="font-icon">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>
          </a>
          <div className="contact-box contact-link">
            <span className="contact-name">
              (864)-760-3438
            </span>
            <span className="font-icon">
              <i className="fa fa-mobile" aria-hidden="true"></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

module.exports={
  BiographyView
}
