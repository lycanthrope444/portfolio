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
      <div>
        <h1 className="section-header">
          Contact Info
        </h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/nathan-starwalt-31725913b/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:nathanstarwalt@gmail.com">
              nathanstarwalt@gmail.com
            </a>
          </li>
          <li>
            Phone
          </li>
        </ul>
      </div>
    )
  }
}

module.exports = {
  LandingView
};
