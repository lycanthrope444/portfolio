var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class PortfolioView extends React.Component{
  render(){
    return(
      <div className="row">
        <h1 className="section-header">
          A Selection of Work
        </h1>
        <div className="">
          <HeroFinder />
          <PixelPerfect />
          <GithubRemake />
          <EtsyRemake />
          <FightLand />
          <SkateShop />
        </div>
      </div>
    )
  }
}

class PortfolioItem extends React.Component{
  constructor(props){
    super(props);

    this.state={
      title: "Project Title",
      thumbnail: "http://unsplash.it/300/300",
      comments: "Thoughts on the project",
      repoLink: "",
      livePage:""
    }
  }
  render(){

    return(
      <div className="col-sm-6 col-md-4">
        <div className="thumbnail">
          <a href={this.state.livePage}>
            <img className="portfolio-pic"
              src={this.state.thumbnail}/>
          </a>
          <div className="caption port-box">
            <h3>
              <a href={this.state.livePage}>
                {this.state.title}
              </a>
            </h3>
            <div>
              {this.state.comments}
            </div>
            <a href={this.state.repoLink} className="btn btn-primary">
              View Repo
            </a>
          </div>
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
      thumbnail: "images/surfandpaddle.png",
      comments: "The goal with this project was to recreate a professionally " +
      "designed page using only basic CSS and HTML. The entire page was programmed from scratch.",
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
      thumbnail: "images/fightland.png",
      comments: "This 80's horror inspired turn-based game was part of a group project using basic JavaScript." +
      " WARNING: There is some music that will autoplay if you follow the link.",
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
      thumbnail: "images/skateshop.png",
      comments: "This was another replication of a professional design. The assets were provided for this project." +
      " This project implemented Bootstrap.",
      repoLink: "https://github.com/lycanthrope444/2.2-sass-responsive",
      livePage: "https://lycanthrope444.github.io/2.2-sass-responsive/"
    }
  }
}

class HeroFinder extends PortfolioItem{
  constructor(props){
    super(props);

    this.state ={
      title: "Hero Finder",
      thumbnail: "images/herofinder.png",
      comments: "This was my final project for the Iron Yard programmed using React, Backbone and Bootstrap." +
      " This project pulled data from Marvel Comics' API and allowed you to track comics that you have collected."
      + " To protect my API keys, I used a proxy server. The currently deployed version has a bug that will prevent " +
      "the search features from working.",
      repoLink: "https://github.com/lycanthrope444/TIY-final-project",
      livePage: "https://lycanthrope444.github.io/TIY-final-project/"
    }
  }
}

class EtsyRemake extends PortfolioItem{
  constructor(props){
    super(props);

    this.state = {
      title: "Etsy Recreation",
      thumbnail: "images/etsyrecreation.png",
      comments: "Using Handlebars, I was tasked with recreating an Etsy search." +
      "This project uses an AJAX call through ",
      repoLink: "https://github.com/lycanthrope444/4.2-handlebars",
      livePage: "https://lycanthrope444.github.io/4.2-handlebars/"
    }
  }
}

class GithubRemake extends PortfolioItem{
  constructor(props){
    super(props);

    this.state = {
      title: "Github Recreation",
      thumbnail: "images/githubrecreation.png",
      comments: "This was a companion project to the Etsy recreation. Github has since changed their " +
      "color scheme around a little bit, but the core of the page is still present.",
      repoLink: "https://github.com/lycanthrope444/4.4-git-profile",
      livePage: "https://lycanthrope444.github.io/4.4-git-profile/"
    }
  }
}

module.exports ={
  PortfolioView
};
