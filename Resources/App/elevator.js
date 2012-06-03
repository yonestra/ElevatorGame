//elevator.js

(function(){
    
    App.ele = {};
    
    App.ele.createElevator = function(floors, animation) {
        
        var eleView = Ti.UI.createView({
            top:App.consts.baseBottom - App.consts.baseHeight,
            left:App.consts.baseLeft,
            height:App.consts.baseHeight,
            width:50,
            backgroundColor:'black',
            anim:animation
        });
        
        Ti.API.info("height:" + floors.height);
        Ti.API.info(floors);
        
        var floorView = {};
        
        for(var floor = 1; floor <= floors.size; floor++) {
            floorView["f" + floor] = Ti.UI.createView({
                top:floors["f" + floor], left:0, height:floors.height, width:50,
                backgroundColor:'pink',
                borderColor:'black',
                floor:floor
            });
            
            // floorView["f" + floor].addEventListener("click", function() {
                // Ti.API.info("fire! : " + floorView["f" + floor].floor);
                // Ti.fireEvent("go_elevator", {floor:floorView["f" + floor].floor});
            // });
            
            eleView.add(floorView["f" + floor]);
        }
        
        // フロアオブジェクトにイベントをつけるやり方ではできない?
        eleView.fv = floorView;
        for(var floor = 1; floor <= floors.size; floor++){
            eleView.fv["f" + floor].addEventListener("click", function() {
                Ti.API.info("fire! : " + eleView.fv["f" + floor].floor);
                Ti.fireEvent("go_elevator", {floor:eleView.fv["f" + floor].floor});
            });
        }
        Ti.API.info(eleView.fv);
        
        var elevator = Ti.UI.createView({
            top:floors["f" + animation.start], left:0, height:floors.height, width:50,
            backgroundColor:'gray',
            opacity:0.7,
            floor:animation.start
        });
        eleView.add(elevator);
        eleView["elevator"] = elevator;
        
        Ti.App.addEventListener("go_elevator", function(floor) {
            Ti.API.info("listen! : " + floor);
            if(eleView.elevator.floor == floor) {
                return;
            } else {
                eleView.elevator.floor = floor;
                elevator.animate(eleView.anim["f" + eleView.elevator.floor]["f" + floor]);
            }
        });
        
        return eleView;
    };
    
    // App.ele.createElevator = function(lane, lnum, fnum, data) {
//         
    // };
    
})();
