var React = require('react');

var LayoutView = require('./layout.jsx');

class ReviewContainer extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <LayoutView>
        Review PlaceHolder
      </LayoutView>
    )
  }
}

module.exports = {
  ReviewContainer
};
