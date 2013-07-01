define(['whyweexplore/roomplayer/interaction/interactionContext',
    'whyweexplore/roomplayer/gameAction/gameActionContext',
    'whyweexplore/roomplayer/items/itemsContext'],
    function(interactionContext, gameActionContext, itemsContext){
    return {
        execute:function(){
            interactionContext.execute();
            gameActionContext.execute();
            itemsContext.execute();
        }
    }
});