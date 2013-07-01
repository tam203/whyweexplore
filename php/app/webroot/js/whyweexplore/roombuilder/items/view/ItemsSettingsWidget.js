define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/ItemsSettingsWidget.html",
    "dijit/_WidgetsInTemplateMixin",
    "whyweexplore/roombuilder/room/model/theRoom",
    "dojo/topic",
    'whyweexplore/roombuilder/items/events/ImageForNewItemUploadedEvent',
    "whyweexplore/roombuilder/utils/ImageUploader"
], function (declare, _WidgetBase, _TemplatedMixin, template, _WidgetsInTemplateMixin, theRoom, topic, ImageForNewItemUploadedEvent) {

    var Widget = declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
        templateString:template,
        postCreate: function(){
            this.uploader.onUploaded = function(url)
            {
                topic.publish(ImageForNewItemUploadedEvent.IMAGE_FOR_NEW_ITEM_UPLOADED, url);
            }
        }
    });

    return Widget;
});