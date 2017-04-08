var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class PortfolioView extends React.Component{
  render(){
    return(
      <LayoutView>
        <h1>
          A Selection of Work
        </h1>
        <PixelPerfect />
        <FightLand />
        <SkateShop />
      </LayoutView>
    )
  }
}

class PortfolioItem extends React.Component{
  constructor(props){
    super(props);

    this.state={
      title: "Project Tile",
      thumbnail: "http://unsplash.it/300/300",
      comments: "Thoughts on the project",
      repoLink: "",
      livePage:""
    }
  }
  render(){

    return(
      <div>
        <h2>
          <a href={this.state.livePage}>
            {this.state.title}
          </a>
        </h2>
        <a href={this.state.livePage}>
          <img src={this.state.thumbnail}/>
        </a>
        <div>
          {this.state.comments}
        </div>
      </div>
    )
  }
}

class PixelPerfect extends PortfolioItem{
  constructor(props){
    super(props);

    this.state ={
      title: "Surf & Paddle",
      thumbnail: "http://unsplash.it/300/300",
      comments: "This was an assignment from the Iron Yard.",
      repoLink: "https://github.com/lycanthrope444/1.4-pixel-perfect",
      livePage: "https://lycanthrope444.github.io/1.4-pixel-perfect/"
    }
  }
}

class FightLand extends PortfolioItem{
  constructor(props){
    super(props);

    this.state ={
      title: "Fight Land",
      thumbnail: "http://unsplash.it/300/300",
      comments: "This was an assignment from the Iron Yard.",
      repoLink: "https://github.com/lycanthrope444/5.4-Turn-Based-Game",
      livePage: "https://lycanthrope444.github.io/5.4-Turn-Based-Game/"
    }
  }
}

class SkateShop extends PortfolioItem{
  constructor(props){
    super(props);

    this.state ={
      title: "Skate Shop Page",
      thumbnail: "http://unsplash.it/300/300",
      comments: "This was an assignment from the Iron Yard.",
      repoLink: "https://github.com/lycanthrope444/2.2-sass-responsive",
      livePage: "https://lycanthrope444.github.io/2.2-sass-responsive/"
    }
  }
}


module.exports ={
  PortfolioView
};
