define(
[
    'dojo/_base/declare',
    'whyweexplore/roombuilder/items/view/ConfigurableItem',
    'whyweexplore/roombuilder/room/model/theRoom',
    'whyweexplore/roomplayer/items/theItemCatalogue'
],
function (declare, ConfigurableItem, theRoom, theItemCatalogue) {
    var Controller = declare(null, {
        execute:function(url){
            var id = ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4);
            var item = new ConfigurableItem({id: id, name:"no name", x:0, y:0, image:url.substr(1), notClickable:true});
            theItemCatalogue.add(item);
            theRoom.addObjectToStage(item);
        }
    });
    return Controller;
});