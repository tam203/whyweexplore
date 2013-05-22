define(['dojo/_base/declare', 'dojo/on', 'whyweexplore/roomplayer/items/Item', 'dojo/dom-style', 'dojo/_base/lang'],
    function (declare, on, Item, domStyle, lang) {
    var KeyboardMovableItem = declare([Item], {
        postCreate:function(){
            this.inherited(arguments);
            this.addKeyboardListeners();
        },

        addKeyboardListeners:function(){
            on(document, "keyup", lang.hitch(this, function(event){
               console.log(event.keyCode);
                switch (event.keyCode){
                    case 38:
                        this.up()
                        break;
                    case 40:
                        this.down()
                        break;
                    case 37:
                        this.left()
                        break;
                    case 39:
                        this.right()
                        break;
                }
            }));
        },

        up:function(){
            var pos = '' + domStyle.get(this.domNode, "bottom");
            pos = +((''+pos).replace('%',''));
            pos = (pos + 1) + '%';
            domStyle.set(this.domNode, "bottom", pos);
            console.log(pos);
        },

        left:function(){
            var pos = '' + domStyle.get(this.domNode, "left");
            pos = +((''+pos).replace('%',''));
            pos = (pos - 1) + '%';
            domStyle.set(this.domNode, "left", pos);
            console.log(pos);
        },

        right:function(){
            var pos = '' + domStyle.get(this.domNode, "left");
            pos = +((''+pos).replace('%',''));
            pos = (pos + 1) + '%';
            domStyle.set(this.domNode, "left", pos);
            console.log(pos);
        },

        down:function(){
            var pos = '' + domStyle.get(this.domNode, "bottom");
            pos = +((''+pos).replace('%',''));
            pos = (pos - 1) + '%';
            domStyle.set(this.domNode, "bottom", pos);
            console.log(pos);
        }




    });
    return KeyboardMovableItem;
})