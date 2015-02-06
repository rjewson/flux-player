var AppDispatcher = require('../dispatcher/AppDispatcher');
var TodoConstants = require('../constants/PlayerConstants');

var PlayerActions = {

  create: function(text) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.TODO_CREATE,
      text: text
    });
  },

  updateText: function(id, text) {
    AppDispatcher.dispatch({
      actionType: PlayerConstants.TODO_UPDATE_TEXT,
      id: id,
      text: text
    });
  }
};

module.exports = PlayerActions;
