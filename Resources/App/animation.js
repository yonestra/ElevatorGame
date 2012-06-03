//elevator.js

(function(){
    
    App.anim = {};
    
    App.anim.createAnim = function(start, floors){
        
        var animation = {
            start:  start
        };
        
        // 移動元 x 移動先のアニメーションを定義
        for(var fromFloor = 1; fromFloor <= floors.size; fromFloor++) {
            
            animation["f" + fromFloor] = {};
            
            for(var toFloor = 1; toFloor <= floors.size; toFloor++) {
                
                // 同じ階ならスキップ
                if(toFloor == fromFloor) continue;
                
                animation["f" + fromFloor]["f" + toFloor] = {
                    duration:   App.consts.duration * Math.abs(fromFloor - toFloor),
                    setFloor:   function(elevator){
                        elevator.floor = toFloor;
                    }
                }
                
                if(toFloor == start) {
                    animation["f" + fromFloor]["f" + toFloor].transform = Ti.UI.create2DMatrix();
                } else {
                    var goal = floors["f" + toFloor] - floors["f" + start];
                    animation["f" + fromFloor]["f" + toFloor].transform = Ti.UI.create2DMatrix().translate(0, goal);
                }
                
            }
        }
        
        Ti.API.info("anim");
        Ti.API.info(animation);
        
        return animation;
    }


})();