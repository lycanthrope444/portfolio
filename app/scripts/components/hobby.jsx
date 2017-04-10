var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class HobbyView extends React.Component{
  render(){
    return(
      <LayoutView>
        <h1>
          Games & More
        </h1>
        <WhatImPlaying />
        <TwitchFriends />
      </LayoutView>
    )
  }
}

class WhatImPlaying extends React.Component{
  render(){
    return(
      <div>
        <h3>
          Here are a few of the games I'm playing currently:
        </h3>
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
        <h3>
          Check out a few of my friends's streams:
        </h3>

      </div>
    )
  }
}

module.exports ={
  HobbyView
}
