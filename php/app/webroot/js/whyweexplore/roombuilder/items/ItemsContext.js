define([
    'dojo/topic',
    'dojo/_base/lang',
    'whyweexplore/roombuilder/items/events/ImageForNewItemUploadedEvent',
    'whyweexplore/roombuilder/items/control/ImageForNewItemUploadedController'
    ],
    function (topic, lang, ImageForNewItemUploadedEvent, ImageForNewItemUploadedController) {
    return {execute:function(){
        var imageForNewItemUploadedController = new ImageForNewItemUploadedController;
        topic.subscribe(ImageForNewItemUploadedEvent.IMAGE_FOR_NEW_ITEM_UPLOADED,
                        lang.hitch(imageForNewItemUploadedController, imageForNewItemUploadedController.execute));

    }};
});