var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;
var BiographyView = require('./biography.jsx').BiographyView;
var PortfolioView = require('./portfolio.jsx').PortfolioView;

class LandingView extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <div className="row">
          <BiographyView />
        </div>

        <div className="row">
          <PortfolioView />
        </div>

      </div>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div className="landing-header">
        <h1 className="portfolio-title name">
          NATHAN STARWALT
        </h1>
        <h3 className="portfolio-title subtitle">
          Front End Engineer
        </h3>
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
