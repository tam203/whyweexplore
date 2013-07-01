define(['dojo/_base/declare'], function (declare) {
    var Class = declare(null, {
        constructor:function(item){
            this.item = item;
        }
    });
    Class.ITEM_DB_CLICKED = "itemDbClicked"
    return Class;
})