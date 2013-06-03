define(['dojo/_base/declare', 'dijit/Dialog'], function (declare, Dialog) {
    var dialog;
    var RoomBackgroundImageUploadController = declare(null, {
        execute:function(){
            if(!dialog){
                dialog = new Dialog();
                dialog.startup();
                dialog.show();
            }

        }
    });
    return RoomBackgroundImageUploadController;
})