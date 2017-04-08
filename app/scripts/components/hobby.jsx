var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class HobbyView extends React.Component{
  render(){
    return(
      <LayoutView>
        Hobby Place Holder
      </LayoutView>
    )
  }
}

class WhatImPlaying extends React.Component{
  render(){
    return(
      <div>
        Placeholder
      </div>
    )
  }
}

class FavoriteGames extends React.Component{
  render(){
    return(
      <div>
        PlaceHolder
      </div>
    )
  }
}

class TwitchFriends extends React.Component{
  render(){
    return(
      <div>
        PlaceHolder
      </div>
    )
  }
}

module.exports ={
  HobbyView
}
