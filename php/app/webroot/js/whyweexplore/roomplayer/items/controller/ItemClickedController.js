define([
    'dojo/_base/declare',
    'whyweexplore/roomplayer/interaction/InteractionEvent',
    'dojo/topic'
], function (declare, InteractionEvent, topic) {
    var Class = declare(null, {
        execute:function(e){
            topic.publish(InteractionEvent.OBJECT_INTERACTION, new InteractionEvent(e.item));
        }
    });
    return Class;
})