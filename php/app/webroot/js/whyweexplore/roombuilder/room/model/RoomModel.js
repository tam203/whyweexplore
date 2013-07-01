define([
    'dojo/_base/declare',
    "whyweexplore/roomplayer/room/RoomModel",
    "whyweexplore/roombuilder/items/model/theItemCatalogue",
    "dojo/Stateful"
],
    function(declare, RoomModel, theItemCatalogue, Stateful){
        var RoomModel = declare([RoomModel, Stateful],{

            roomId: null,
            _roomIdGetter: function(){
                return this.roomId;
            },

            _roomIdSetter: function(value){
                this.roomId = value;
            },

            toGameJSON:function(){
                var json = {
                    title:"None",
                    background:this.background,
                    items: theItemCatalogue.toGameJSON()
                };
                if(this.roomId){
                    json.id = this.roomId;
                }
                return json;
            }
        });
        return RoomModel;
    }
)