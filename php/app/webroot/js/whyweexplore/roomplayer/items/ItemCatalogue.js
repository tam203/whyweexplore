define(['dojo/_base/declare' , "dojo/store/Memory"],function(declare, Memory){
    var ItemCatalogue = declare([Memory], {
        _catalogue:{},
        add:function(item){
            this.put(item);
            //this._catalogue[item.id] = item;
        },
        remove:function(item_id){
            return this.inherited(arguments);
            /*var item = this._catalogue[item_id];
             delete this._catalogue[item_id];
             return item;*/
        },
        get: function(item_id){
            return this.inherited(arguments);
            /*var item = null;
             if(this._catalogue.hasOwnProperty(item_id)){
             item = this._catalogue[item_id];
             }
             return item;*/
        },
        items:function(){
            return this.query();
            /*
             var items = [];
             for(var i in this._catalogue){
             if(this._catalogue.hasOwnProperty(i)){
             items.push(this._catalogue[i]);
             }
             }
             return items;*/
        }

    });
    return ItemCatalogue;
});
