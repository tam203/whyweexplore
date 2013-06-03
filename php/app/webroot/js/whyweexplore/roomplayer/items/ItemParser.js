define(["dojo/_base/declare",
        'whyweexplore/roomplayer/items/Item',
        'whyweexplore/roomplayer/items/KeyboardMovableItem',
        'whyweexplore/roomplayer/items/theItemCatalogue'],
    function(declare, Item, KeyboardMovableItem, itemCatalogue){
        return {
            parse:function(items){
                for(var i=0; i < items.length; i++) {
                    var mixins = [Item];
                    if (items[i].type === "keyboard controlled"){
                        mixins.push(KeyboardMovableItem);
                    }
                    itemCatalogue.add((new declare(mixins, {}))(items[i]));
                }
            }
        }
    }
);