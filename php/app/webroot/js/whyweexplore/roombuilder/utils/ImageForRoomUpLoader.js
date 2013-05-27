define(["dojo/_base/declare","dijit/_WidgetBase", "dijit/_TemplatedMixin", "dojo/parser", "dijit/Dialog", "dojo/text!./template/ImageForRoomUpLoader.html"],
    function(declare, _WidgetBase, _TemplatedMixin, parser, Dialog, template){
        var ImageUpLoader = declare([_WidgetBase, _TemplatedMixin], {
            templateString:template,
            show:function(){ imageUploader.show();}
        });
        return ImageUpLoader;
    }
);