define(['dojo/topic',
    'whyweexplore/roomplayer/interaction/InteractionController',
    'whyweexplore/roomplayer/interaction/InteractionEvent',
    'dojo/_base/lang'],

    function(topic, InteractionController, InteractionEvent, lang){
        return {
            execute: function(){
                var controler = new InteractionController();
                topic.subscribe(InteractionEvent.OBJECT_INTERACTION,
                    lang.hitch(controler, controler.execute));
            }
        }

});