define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/RoomSettingsWidget.html",
    "dijit/_WidgetsInTemplateMixin",
    "whyweexplore/roombuilder/room/model/theRoom",
    'whyweexplore/roombuilder/room/events/NewRoomBackgoundSetEvent',
    "dojo/topic",
    'whyweexplore/roombuilder/room/events/RoomExportEvent',
    "whyweexplore/roombuilder/utils/ImageUploader",
    "dojo/_base/lang"
], function (declare, _WidgetBase, _TemplatedMixin, template, _WidgetsInTemplateMixin, theRoom, NewRoomBackgoundSetEvent,
             topic, RoomExportEvent, ImageUploader, lang, RoomIdChangedEvent ) {

    var RoomSettingsWidget = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString:template,
        postCreate: function(){
            this.uploader.onUploaded = function(url)
            {
                topic.publish(NewRoomBackgoundSetEvent.NEW_BACKGROUND_IMAGE_SET, new NewRoomBackgoundSetEvent(url));
            }

            theRoom.watch("roomId", lang.hitch(this,  function(name, oldValue, value){
                this._roomIdUpdated(value);
            }));
        },
        export:function(e){
            topic.publish(RoomExportEvent.ROOM_EXPORT, new RoomExportEvent());
        },

        _roomIdUpdated:function(roomId){
            this._playButton.innerHTML = "Play";
            this._playButton.setAttribute("target","_blank");
            this._playButton.setAttribute("href","roomPlayer.html#api/"+ roomId);
        }

    });

    return RoomSettingsWidget;
});