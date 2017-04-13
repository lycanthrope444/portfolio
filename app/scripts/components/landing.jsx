var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;
var BiographyView = require('./biography.jsx').BiographyView;
var PortfolioView = require('./portfolio.jsx').PortfolioView;

class LandingView extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <BiographyView />
        <PortfolioView />
        <ContactInfo />
        <NavBar />
      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div className="landing-header">
        <h1 className="portfolio-title">
          NATHAN STARWALT
        </h1>
        <h3 className="portfolio-title">
          Front End Engineer
        </h3>
      </div>
    )
  }
}

class ContactInfo extends React.Component{
  render(){
    return(
      <div href="row">
        <div className="contact-section">
          <h1 className="section-header">
            Contact Info
          </h1>
          <div className="col-md-3">
            <div className="contact-box">
              <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-box">
              <a href="mailto:nathanstarwalt@gmail.com">
                nathanstarwalt@gmail.com
              </a>
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-box">
              (864)-760-3438
            </div>
          </div>
          <div className="col-md-3">
            <div className="contact-box">
              <a href="">
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar-side">
        <div>
          Placeholder 1
        </div>
        <div>
          Placeholder 2
        </div>
      </div>
    )
  }
}

module.exports = {
  LandingView
};
