define([
    'whyweexplore/roombuilder/room/RoomContext',
    'whyweexplore/roombuilder/items/ItemsContext'
],
    function (RoomContext, ItemsContext) {
        return {execute:function(){
            RoomContext.execute();
            ItemsContext.execute();

        }};
    });