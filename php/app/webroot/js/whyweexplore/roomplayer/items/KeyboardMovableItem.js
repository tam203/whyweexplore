define(['dojo/_base/declare', 'dojo/on', 'whyweexplore/roomplayer/items/Item', 'dojo/dom-style'],
    function (declare, on, Item, domStyle) {
    var KeyboardMovableItem = declare([Item], {
        postCreate:function(){
            this.inherited(arguments);
            this.addKeyboardListeners();
        },

        addKeyboardListeners:function(){
            on(document, "keyup", function(event){
               console.log(event.keyCode);
                switch (event.keyCode){
                    case 38:
                        this.left()
                        break;
                    case 40:
                        this.right()
                        break;
                    case 37:
                        this.up()
                        break;
                    case 39:
                        this.down()
                        break;
                }
            });
        },

        left:function(){
            domStyle.get(this.domNode, "");
        }




    });
    return KeyboardMovableItem;
})