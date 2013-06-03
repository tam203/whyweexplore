define(["whyweexplore/roombuilder/room/model/theRoom", "dojo/_base/declare","dijit/_WidgetBase", "dijit/Dialog", "dojo/text!./template/ImageForRoomUpLoader.html", "dojo/query", "dojo/_base/lang"],
    function(room, declare, _WidgetBase, Dialog, template, query, lang){
        var ImageUpLoader = declare([_WidgetBase], {
            //templateString:"<div>Hi</div>",
            postCreate:function(){
                this.dialog = new Dialog({content:template, title:"Image upload", room_id:room.id});
                this.dialog.startup();
                this.uploaderWindow = (query("iframe", this.dialog.domNode)[0]).contentWindow;
                this.setIFrameId();
            },
            show:function(){
                this.dialog.show();
            },
            setIFrameId: function(){
                var checkIFrameLoadInterval = setInterval(lang.hitch(this,function() {
                    if(!this.uploaderWindow){
                        clearInterval(checkIFrameLoadInterval );

                    } else if (this.uploaderWindow.document.readyState === "complete") {
                        clearInterval(checkIFrameLoadInterval);
                        this.uploaderWindow.setImageId(room.id);
                        this.uploadIFrame.setCallback('alert("%URL");');
                    }
                }, 100));
            }
        });
        return ImageUpLoader;
    }
);