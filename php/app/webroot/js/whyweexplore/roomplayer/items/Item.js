define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin", 'dojo/dom-style',
    "whyweexplore/roomplayer/interaction/InteractionEvent",
    "whyweexplore/roomplayer/interaction/InteractionModel",
    "dojo/topic",
    "dojo/text!whyweexplore/roomplayer/items/ItemTemplate.html",
    "dojo/_base/event"],
    function(declare, _WidgetBase, _TemplatedMixin, domStyle, InteractionEvent,
             InteractionModel, topic, template, event){
    var Item = declare("Item",[_WidgetBase, _TemplatedMixin], {
        templateString:template,
        postCreate:function(){
            domStyle.set(this.domNode, {
                'position':'absolute',
                'bottom': this.params.y + '%',
                'left': this.params.x + '%'
            });
            if(this.params.hidden) {
                this.hide();
            }
        },
        onhit:function(e){
            event.stop(e);
            topic.publish(InteractionEvent.OBJECT_INTERACTION, new InteractionEvent(this));
        },
        show:function(){
            domStyle.set(this.domNode, {display:'block'});
        },
        hide:function(){
            domStyle.set(this.domNode, {display:'none'});
        }

    });
    return Item;
})