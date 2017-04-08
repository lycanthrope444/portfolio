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

class PortfolioItem extends React.Component{
  constructor(){

    this.state={
      title: null,
      thumbnail: null,
      comments: null
    }
  }
  render(){
    return(
      <div>
        Project Title
        Thumbnail
        Thoughts on the project
      </div>
    )
  }
}

module.exports ={
  PortfolioView
};
