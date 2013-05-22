define(['dojo/_base/declare'], function(declare){
    var InteractionModel = declare(null,{
        _interaction:[],
        clear:function(){
            this._interaction = [];
        },
        addInteraction:function(item_id){
            this._interaction.push(item_id);
        },
        getInteractions:function(value){
            return this._interaction;
        }
    });

    return InteractionModel;
});