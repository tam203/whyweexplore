define(['dojo/_base/declare'],function(declare){
    var ItemCatalogue = declare(null, {
        _catalogue:{},
        add:function(item){
            this._catalogue[item.id] = item;
        },
        remove:function(item_id){
            var item = this._catalogue[item_id];
            delete this._catalogue[item_id];
            return item;
        },
        get: function(item_id){
            var item = null;
            if(this._catalogue.hasOwnProperty(item_id)){
                item = this._catalogue[item_id];
            }
            return item;
        },
        items:function(){
            var items = [];
            for(var i in this._catalogue){
                if(this._catalogue.hasOwnProperty(i)){
                    items.push(this._catalogue[i]);
                }
            }
            return items;
        }

    });
    return ItemCatalogue;
});
