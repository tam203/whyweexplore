define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/ImageUploaderTemplate.html",
    "dojo/_base/event",
    "dijit/form/Button",
    "whyweexplore/roombuilder/room/model/theRoom",
    "dojo/topic",
    "dojo/_base/lang"
], function (declare, _WidgetBase, _TemplatedMixin, template, event, Button, theRoom, topic, lang) {

    var IMAGE_UPLOAD = "ImageUploader:imageUpload"

    // Map the global call back for new image to publishing a new event.
    window.newRoomImage =  function(uid, url){
        var eventName = IMAGE_UPLOAD + uid
        console.log(url);
        topic.publish(eventName, url);
    };


    var ImageUploader = declare([_WidgetBase, _TemplatedMixin], {
        templateString:template,
        postCreate:function(){
            this.inherited(arguments);
            this.uid = ("0000" + (Math.random()*Math.pow(36,4) << 0).toString(36)).substr(-4)
            var url = "rooms/upload_image_for_room/" +  theRoom.id + "/" + this.uid;
            topic.subscribe(IMAGE_UPLOAD + this.uid, lang.hitch(this, this._handelNewImageUpload));
            this.iframe.src = url;
        },

        _handelNewImageUpload:function(url){
            if(url && this.onUploaded){
                this.onUploaded(url);
            }
        }
    });

    return ImageUploader;
});