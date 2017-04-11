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
      </LayoutView>
    )
  }
}

class Header extends React.Component{
  render(){
    return(
      <div className="landing-header">
        <h1>
          Nathan Starwalt
        </h1>
      </div>
    )
  }
}

class WorkLinks extends React.Component{
  render(){
    return(
      <div>
        <h1>
          <a href="#portfolio">
            Work
          </a>
        </h1>
      </div>
    )
  }
}

class HobbyLinks extends React.Component{
  render(){
    return(
      <div>
        <h1>
          <a href="#hobby">
            Play
          </a>
        </h1>
      </div>
    )
  }
}

module.exports = {
  LandingView
};
