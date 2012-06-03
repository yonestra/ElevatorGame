//elevator.js

(function(){

    App.floor = {};

    App.floor.createFloors = function(fnum) {
        
        var floors = {
            size:   fnum
        };
        
        // エレベーター全体の高さ / フロアの数
        
        floors.height = App.consts.baseHeight / fnum;
        
        // フロアの位置をフロアの数だけ順番に追加する
        for(var floor = 1; floor <= fnum; floor++) {
            // floors["f" + floor] = App.consts.baseBottom - floors.height * floor;
            floors["f" + floor] = App.consts.baseHeight - floors.height * floor;
        }
        
        Ti.API.info(floors);
        
        return floors;
    }

})();