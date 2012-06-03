Titanium.UI.setBackgroundColor('#000');

var App = {};
require('App/consts');
require('App/floor');
require('App/animation');
require('App/elevator');
require('App/ui');

(function() {

// var floors = App.floor.createFloors(4);
// 
// var animation = App.anim.createAnim(1, floors);

App.tabGroup = App.ui.createAppsTabGroup();
App.tabGroup.open();

})();

// Titanium.include('runner.js');