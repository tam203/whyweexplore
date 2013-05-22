define(['dojo/_base/declare'], function(declare) {
   var InteractionEvent = declare(null,{
       constructor: function(item){
           this.item = item;
       }
    }) ;

    InteractionEvent.OBJECT_INTERACTION = "InteractionEvent:objectInteraction";

    return InteractionEvent;
});
