define(['dojo/_base/declare'], function(declare){
    var GameAction = declare(null,{
        constructor: function(definition){
            this.between = definition.between;
        },
        isBetween:function(items){
            return ((items[0].id == this.between[0] && items[1].id == this.between[1]) ||
                    (items[0].id == this.between[1] && items[1].id == this.between[0]));
        }
    });

    return GameAction;
})