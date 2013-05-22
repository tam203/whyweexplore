define(['dojo/topic',
    'whyweexplore/roomplayer/gameAction/GameActionController',
    'whyweexplore/roomplayer/gameAction/GameActionEvent',
    'dojo/_base/lang'],

    function(topic, GameActionController, GameActionEvent, lang){
        return {
            execute: function(){
                var controller = new GameActionController();
                topic.subscribe(GameActionEvent.EXECUTE_ACTIONS_FOR_INTERACTION,
                    lang.hitch(controller, controller.execute));
            }
        }

});