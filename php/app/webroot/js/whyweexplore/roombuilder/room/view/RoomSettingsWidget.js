define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/RoomSettingsWidget.html",
    "dojo/_base/event",
    "dijit/form/Button",
    "dijit/_WidgetsInTemplateMixin",
    "whyweexplore/roombuilder/room/events/SetBackGroundImageEvent",
    "dojo/topic",
    "dojox/form/Uploader",
    "dojox/form/uploader/plugins.IFrame"
], function (declare, _WidgetBase, _TemplatedMixin, template, event, Button, _WidgetsInTemplateMixin, SetBackGroundImageEvent, topic) {
    var RoomSettingsWidget = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString:template,
        _backgroundImageLoadClick: function(e){
            event.stop(e);
            topic.publish(SetBackGroundImageEvent.SET_BACKGROUND_IMAGE_BUTTON_CLICKED, new SetBackGroundImageEvent());
        }
    });
    return RoomSettingsWidget;
});