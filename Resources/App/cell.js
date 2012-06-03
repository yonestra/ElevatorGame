//table.js

(function(){
	
	App.cell = {};
	
	App.cell.createBase = function(length, rate) {
	    
        var base = [];
        
        for(var i=0; i<length+2; i++) {
            var row = [];
            if(i == 0 || i == length+1) {
                for(var j=0; j<length+2; j++) {
                    row.push(0);
                }
            } else {
                for(var j=0; j<length+2; j++) {
                    if(Math.random() * 100 < rate) {
                        row.push(1);
                    } else {
                        row.push(0);
                    }
                }
            }
            base.push(row);
        }
        
        return base;
    };
	
	
	App.cell.createBaseView = function(base) {
        var baseView = Ti.UI.createView({
            top:40, left:20, right:20, height:280,
            backgroundColor:'white',
            borderColor:'black'
        });
        
        var length = base.length-2;
        var side = 280 / length;
        
        for(var i=0; i<length; i++) {
            for(var j=0; j<length; j++) {
                var cellView = Ti.UI.createView({
                    top:i*side, left:j*side,
                    height:side, width:side,
                    borderColer:'gray'
                });
                if(base[i+1][j+1]) {
                    cellView.backgroundColor = 'black';
                } else {
                    cellView.backgroundColor = 'white';
                }
                baseView.add(cellView);
                baseView[i+','+j] = cellView;
            }
        }
        
        // baseView.apply = function(newBase) {
        // for(var i=0; i<length; i++) {
        // for(var j=0; j<length; j++) {
        // if(newBase[i+1][j+1]) {
        // baseView[i+','+j].backgroundColor = 'black';
        // } else {
        // baseView[i+','+j].backgroundColor = 'white';
        // }
        // }
        // }
        // }
        
        return baseView;
    };
    
    App.cell.executeOneCycle = function(baseView, base) {
        var length = base.length-2;
        for(var i=0; i<length; i++) {
            for(var j=0; j<length; j++) {
                var sum = 0;
                if(base[i][j]) sum++;
                if(base[i][j+1]) sum++;
                if(base[i][j+2]) sum++;
                if(base[i+1][j]) sum++;
                if(base[i+1][j+2]) sum++;
                if(base[i+2][j]) sum++;
                if(base[i+2][j+1]) sum++;
                if(base[i+2][j+2]) sum++;
                if(base[i+1][j+1]) {
                    if(sum <= 1) {
                        base[i+1][j+1] = 0;
                        baseView[i+','+j].backgroundColor = 'white';
                    }
                    if(sum >= 4) {
                        base[i+1][j+1] = 0;
                        baseView[i+','+j].backgroundColor = 'white';
                    }
                } else {
                    if(sum == 3) {
                        base[i+1][j+1] = 1;
                        baseView[i+','+j].backgroundColor = 'black';
                    }
                }
            }
        }
    };
    
})();
