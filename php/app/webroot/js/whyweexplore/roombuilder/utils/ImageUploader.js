define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./template/ImageUploader.html"
], function( declare, _WidgetBase, _TemplatedMixin, template){
    var ImageUploader = declare([_WidgetBase,_TemplatedMixin], {
        templateString:template
    });
});
