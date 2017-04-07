var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class PortfolioView extends React.Component{
  render(){
    return(
      <LayoutView>
        Porfolio Holder
      </LayoutView>
    )
  }
}

module.exports ={
  PortfolioView
};
