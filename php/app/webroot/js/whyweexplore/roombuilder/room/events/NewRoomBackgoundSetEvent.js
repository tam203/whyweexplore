define(['dojo/_base/declare'], function (declare) {
    var NewRoomBackgoundSet = declare(null, {
        constructor:function(url){
            this.url = url;
        }
    });
    NewRoomBackgoundSet.NEW_BACKGROUND_IMAGE_SET = "newBackgroundImageSet";
    return NewRoomBackgoundSet;
})