define(['whyweexplore/roomplayer/interaction/interactionContext',
    'whyweexplore/roomplayer/gameAction/gameActionContext'],
    function(interactionContext, gameActionContext){
    return {
        execute:function(){
            interactionContext.execute();
            gameActionContext.execute();
        }
    }
});