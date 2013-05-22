define(['dojo/_base/declare'], function(declare) {
   var GameActionEvent = declare(null,{
       constructor: function(interactionItems){
           this.between = interactionItems;
       }
    }) ;

    GameActionEvent.EXECUTE_ACTIONS_FOR_INTERACTION = "GameActionEvent:executeActionsForInteraction";

    return GameActionEvent;
});
