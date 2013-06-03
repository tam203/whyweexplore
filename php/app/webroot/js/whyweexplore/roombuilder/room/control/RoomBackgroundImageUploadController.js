define(['dojo/_base/declare', '"dijit/Dialog'], function (declare) {
    var dialog;
    var RoomBackgroundImageUploadController = declare(null, {
        execute:function(){
            if(!dialog){
                dialog = new Dialog();

            }
        }
    });
    return RoomBackgroundImageUploadController;
})