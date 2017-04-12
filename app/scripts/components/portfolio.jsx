var React = require('react');

var LayoutView = require('./layout.jsx').LayoutView;

class PortfolioView extends React.Component{
  render(){
    return(
      <div className="row">
        <h1 className="col-xs-12 section-header">
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
      techDetails: "Here are some tech details",
      repoLink: "",
      livePage:""
    }
  }
  render(){

    return(
      <div className="col-sm-6 col-md-4">
        <h2>
          <a href={this.state.livePage}>
            {this.state.title}
          </a>
        </h2>
        <a href={this.state.livePage}>
          <img className="portfolio-pic"
            src={this.state.thumbnail}/>
        </a>
        <div>
          {this.state.techDetails}
        </div>
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
      thumbnail: "images/surfandpaddle.png",
      comments: "This was an assignment from the Iron Yard.",
      techDetails: "Here are some tech details",
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
      comments: "This was an assignment from the Iron Yard.",
      techDetails: "Here are some tech details",
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
      comments: "This was an assignment from the Iron Yard.",
      techDetails: "Here are some tech details",
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
      comments: "This was an assignment from the Iron Yard.",
      techDetails: "Here are some tech details",
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
      comments: "This was an assignmnt from the Iron Yard",
      techDetails: "Here are some",
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
      comments: "This was an assignmnt from the Iron Yard",
      techDetails: "Here are some",
      repoLink: "https://github.com/lycanthrope444/4.4-git-profile",
      livePage: "https://lycanthrope444.github.io/4.4-git-profile/"
    }
  }
}

module.exports ={
  PortfolioView
};
