define(['dojo/_base/declare', 'dojo/dom-construct','dojo/dom-style', "whyweexplore/roomplayer/items/Item",
    "whyweexplore/roomplayer/gameAction/actions/GameActionParser", 'whyweexplore/roomplayer/items/theItemCatalogue'],
    function(declare, domConstruct, domStyle, GameItem, GameActionParser, itemCatalogue){
        var RoomModel = declare(null,{
            loadRoom:function(roomData){
                this.title = roomData.title;
                this.background = roomData.background;
                this._parseItems(roomData.items);
                this._parseGameActions(roomData.gameActions);
            },

            _parseItems: function(items){
                for(var i=0; i < items.length; i++) {
                    itemCatalogue.add(new GameItem(items[i]));
                }
            },

            _parseGameActions: function(interactions){
                this._gameActions = GameActionParser.parse(interactions);
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