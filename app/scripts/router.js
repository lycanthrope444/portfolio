var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var landing = require('./components/landing.jsx').LandingView;

var AppRouter = Backbone.Router.extend({
  routes:{
    '':'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(landing),
      document.getElementById('app')
    );
  }
});

var appRouter = new AppRouter();

module.exports = appRouter;
