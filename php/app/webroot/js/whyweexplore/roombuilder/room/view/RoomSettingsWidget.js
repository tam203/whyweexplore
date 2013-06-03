define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/RoomSettingsWidget.html"
], function (declare, _WidgetBase, _TemplatedMixin, template) {
    var RoomSettingsWidget = declare([_WidgetBase, _TemplatedMixin], {
        templateString:template
    });
    return RoomSettingsWidget;
});