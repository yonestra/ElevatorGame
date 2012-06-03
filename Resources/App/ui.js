//ui.js

(function() {
    
    App.ui = {};
    
    App.ui.createAppWindow = function(){
		var win = Ti.UI.createWindow();
		
    	win.title = 'Elevator Game';
		win.backgroundColor = '#fff';
		
		var floors = App.floor.createFloors(4);

        var animation = App.anim.createAnim(1, floors);
		
		var eleView = App.ele.createElevator(floors, animation);
		win.add(eleView);
		
		// var button = Ti.UI.createButton({
            // bottom:30, height:40, width:100,
            // title:'実行', 
        // });
        // button.addEventListener('click', function(){
            // App.cell.executeOneCycle(baseView, base);
        // });
        // win.add(button);
		
	  	return win;
    	
    };

    App.ui.createAppsTabGroup = function(){
        
    	var tabGroup = Ti.UI.createTabGroup();
    	
    	var table1win = App.ui.createAppWindow();
    	table1win.hideTabBar();
    	
		App.ui.tab1 = Ti.UI.createTab({
			title: "Life Game",
			window:table1win});
    	
    	tabGroup.addTab(App.ui.tab1);
    	
    	return tabGroup;
    	
    };
})();
