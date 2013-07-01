define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    'dojo/dom-style',
    "whyweexplore/roomplayer/items/events/ItemClickedEvent",
    "whyweexplore/roomplayer/items/events/ItemDbClickedEvent",
    "dojo/topic",
    "dojo/text!./template/Item.html",
    "dojo/_base/event",
    "dojo/dom-attr"
],function(
    declare,
    _WidgetBase,
    _TemplatedMixin,
    domStyle,
    ItemClickedEvent,
    ItemDbClickedEvent,
    topic,
    template,
    event,
    domAttr){
    var Item = declare([_WidgetBase, _TemplatedMixin], {
        templateString:template,
        postCreate:function(){
            domStyle.set(this.domNode, {
                'position':'absolute',
                'top': this.params.y + 'px',
                'left': this.params.x + 'px'
            });
            if(this.params.hidden) {
                this.hide();
            }
            if(this.params.notClickable)
            {
                domAttr.remove(this.domNode, "href");
            }
        },
        _onClick:function(e){
            event.stop(e);
            topic.publish(ItemClickedEvent.ITEM_CLICKED, new ItemClickedEvent(this));
        },
        show:function(){
            domStyle.set(this.domNode, {display:'block'});
        },
        hide:function(){
            domStyle.set(this.domNode, {display:'none'});
        },
        _onDbClick:function(e){
            event.stop(e);
            topic.publish(ItemDbClickedEvent.ITEM_DB_CLICKED, new ItemDbClickedEvent(this));
        }


    });
    return Item;
})