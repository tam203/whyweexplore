define([
    'dojo/_base/declare',
    'whyweexplore/roomplayer/items/Item',
    "dojo/dnd/Moveable",
    "dojo/on",
    'dojo/dom-style'
],
    function(declare, Item, Moveable, on, domStyle){
        var ConfigurableItem = declare([Item],{
            postCreate:function(){
                this.inherited(arguments);
                this.dnd = new Moveable(this.domNode);
            },
            toGameJSON:function(){
                return  {
                    name: this.params.name,
                    image:this.params.image,
                    id:this.params.id,
                    x:this.getX(),
                    y:this.getY()
                };
            },
            getX:function(){
                return String(domStyle.get(this.domNode, "left"));
            },
            getY:function(){
                return String(domStyle.get(this.domNode, "top"));
            }
        });

        return ConfigurableItem;
    }
);
