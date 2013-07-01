define([
    "whyweexplore/roomplayer/items/theItemCatalogue",
    "dojo/_base/array"
], function(
    theItemCatalogue,
    array
){
    theItemCatalogue.toGameJSON = function(){
        return array.map(this.items(), function(item){
            return item.toGameJSON();
        });
    }
    return theItemCatalogue
});