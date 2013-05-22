define(['dojo/_base/declare', 'whyweexplore/roomplayer/gameAction/actions/GameAction',
        'whyweexplore/roomplayer/items/theItemCatalogue'],
    function(declare, GameAction, itemCatalogue){
    var ItemGameAction = declare([GameAction],{
        constructor: function(definition){
            this.toHide = definition.hide;
            this.toShow = definition.show;
        },
        execute:function(){
            this.doHide();
            this.doShow();

        },
        doHide:function(){
            for(var i=0; i < this.toHide.length; i++){
                var item = itemCatalogue.get(this.toHide[i]);
                if(item) {
                    item.hide();
                }
            }
        },
        doShow:function(){
            for(var i=0; i < this.toShow.length; i++){
                var item = itemCatalogue.get(this.toShow[i]);
                if(item) {
                    item.show();
                }
            }
        }
    });

    return ItemGameAction;
})