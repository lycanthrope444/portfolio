var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class LandingView extends React.Component{
  render(){
    return(
      <LayoutView>
        <Header />
        <div className="row">
          <div className="col-sm-6">
            <WorkLinks />
          </div>
          <div className="col-sm-6">
            <HobbyLinks />
          </div>
        </div>
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
        <h2>
          <a href="#biography">
            About
          </a>
        </h2>
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
