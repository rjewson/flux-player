var React = require('react');

var PlayerApp = require('./components/PlayerApp.react');
console.log("start");
React.render(
  <PlayerApp />,
  document.getElementById('playerapp')
);
