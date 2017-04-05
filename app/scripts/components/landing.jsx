var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class LandingView extends React.Component{
  render(){
    return(
      <LayoutView>
        <div>
          Landing PlaceHolder
        </div>

      </LayoutView>
    )
  }
}

module.exports = {
  LandingView
};
