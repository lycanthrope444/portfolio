var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var landing = require('./components/landing.jsx').LandingView;
var review = require('./components/review.jsx').ReviewContainer;
var biography = require('./components/biography.jsx').BiographyView;
var portfolio = require('./components/portfolio.jsx').PortfolioView;
var hobby = require('./components/hobby.jsx').HobbyView;

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'index',
    'biography':'biography',
    'hobby':'hobby',
    'review/:id':'review',
    'review':'review',
    'portfolio':'portfolio'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(landing),
      document.getElementById('app')
    );
  },
  review: function(id){
    ReactDOM.render(
      React.createElement(),
      document.getElementById('app')
    );
  },
  biography: function(){
    ReactDOM.render(
      React.createElement(biography),
      document.getElementById('app')
    );
  },
  hobby: function(){
    ReactDOM.render(
      React.createElement(hobby),
      document.getElementById('app')
    );
  },
  portfolio: function(){
    ReactDOM.render(
      React.createElement(portfolio),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
