define(['dojo/_base/declare', 'dojo/topic',
    'whyweexplore/roomplayer/gameAction/GameActionEvent',
    'whyweexplore/roomplayer/interaction/theInteractionModel'],
    function(declare, topic, GameActionEvent, interactionModel){
    var InteractionController = declare(null,{
        execute:function(event){
            interactionModel.addInteraction(event.item);
            if(interactionModel.getInteractions().length >= 2)
            {
                topic.publish(GameActionEvent.EXECUTE_ACTIONS_FOR_INTERACTION,
                    new GameActionEvent(interactionModel.getInteractions()));
                interactionModel.clear();
            }
        }
    });

    return InteractionController;
});