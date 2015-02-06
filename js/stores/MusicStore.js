var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var TodoConstants = require('../constants/PlayerConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _tracks = {};

function create(trackName) {
  var id = Date.now();
  _tracks[id] = {
    id: id,
    complete: false,
    text: text
  }
}


var MusicStore = assign({}, EventEmitter.prototype, {

});

module.exports = MusicStore;
