/**
 * This component operates as a "Controller-View".  It listens for changes in
 * the MusicStore and passes the new data to its children.
 */

var Footer = require('./Footer.react');
var Header = require('./Header.react');
var MainSection = require('./MainSection.react');
var React = require('react');
var MusicStore = require('../stores/MusicStore');

var PlayerApp = React.createClass({

  render: function() {
  	return (
      <div>
        <Header />
        <MainSection />
        <Footer />
      </div>
  	);
  }

});

module.exports = PlayerApp;
