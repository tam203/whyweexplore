define(['dojo/_base/declare', 'dojo/dom-construct','dojo/dom-style', "whyweexplore/roomplayer/items/Item",
    "whyweexplore/roomplayer/gameAction/actions/GameActionParser", 'whyweexplore/roomplayer/items/theItemCatalogue',
    "whyweexplore/roomplayer/items/ItemParser"],
    function(declare, domConstruct, domStyle, GameItem, GameActionParser, itemCatalogue, ItemParser){
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


            addObjectsToStage: function(stage){
                var items = itemCatalogue.items();
                for(var i = 0; i < items.length; i++){
                    var gameItem = items[i];
                    gameItem.placeAt(stage.ele)
                    gameItem.startup();
                }
            }


        });

        return RoomModel;
    }
)