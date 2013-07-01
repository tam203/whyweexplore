define(['dojo/_base/declare', 'dojo/dom-construct','dojo/dom-style', "whyweexplore/roomplayer/items/Item",
    "whyweexplore/roomplayer/gameAction/actions/GameActionParser",
    "whyweexplore/roomplayer/items/ItemParser", "whyweexplore/roomplayer/view/theStage"],
    function(declare, domConstruct, domStyle, GameItem, GameActionParser, ItemParser, theStage){
        var RoomModel = declare(null,{
            loadRoom:function(roomData){
                this.title = roomData.title;
                this.background = roomData.background;
                ItemParser.parse(roomData.items);
                this._gameActions = GameActionParser.parse(roomData.gameActions);
            },

            getGameActions: function(){
                return this._gameActions;
            },


            addObjectsToStage: function(items){
                for(var i = 0; i < items.length; i++){
                    this.addObjectToStage(items[i])
                }
            },

            addObjectToStage: function(gameItem){
                gameItem.placeAt(theStage.ele)
                gameItem.startup();
            },

            setRoomBackground:function(imgUrl){
                this.background = imgUrl;
                theStage.setBackground(imgUrl);
            }


        });

        return RoomModel;
    }
)