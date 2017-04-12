var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;
var BiographyView = require('./biography.jsx').BiographyView;
var PortfolioView = require('./portfolio.jsx').PortfolioView;

class LandingView extends React.Component{
  render(){
    return(
      <LayoutView>
        <Header />
        <BiographyView />
        <PortfolioView />
        <ContactInfo />
      </LayoutView>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="landing-header">
            <h1>
              Nathan Starwalt
            </h1>
            <h3>Front End Engineer</h3>
          </div>
        </div>
      </div>

    )
  }
}

class ContactInfo extends React.Component{
  render(){
    return(
      <div href="row">
        <h1 className="section-header">
          Contact Info
        </h1>
        <div className="col-md-3">
          <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/">
            LinkedIn
          </a>
        </div>
        <div className="col-md-3">
          <a href="mailto:nathanstarwalt@gmail.com">
            nathanstarwalt@gmail.com
          </a>
        </div>
        <div className="col-md-3">
          (864)-760-3438
        </div>
        <div className="col-md-3">
          <a href="">
            Resume
          </a>
        </div>
      </div>
    )
  }
}

module.exports = {
  LandingView
};
