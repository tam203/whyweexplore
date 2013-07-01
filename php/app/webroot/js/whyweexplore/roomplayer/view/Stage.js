define(['dojo/_base/declare', "dojo/dom", "whyweexplore/roomplayer/view/config", "dojo/dom-style"],
    function(declare, dom, config, domStyle){
        var Stage = declare(null,{
            constructor:function(){
                this.ele = dom.byId(config.stageId);
            },
            setBackground:function(imgUrl){
                var ele = this.ele;
                var img = new Image();
                img.onload = function() {
                    domStyle.set(ele,{"width": this.width + "px", "height": this.height +"px"});
                }
                img.src = imgUrl;
                domStyle.set(this.ele, "background-image", "url("+imgUrl+")");
                this.backgroundImage = imgUrl;
            }

        });
        return Stage;
    }
);