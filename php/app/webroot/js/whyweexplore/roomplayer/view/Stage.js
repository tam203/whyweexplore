define(['dojo/_base/declare', "dojo/dom", "whyweexplore/roomplayer/view/config", "dojo/dom-style"],
    function(declare, dom, config, domStyle){
        var Stage = declare(null,{
            constructor:function(){
                this.ele = dom.byId(config.stageId);
            },
            setBackground:function(imgUrl){
                domStyle.set(this.ele, "background-image", "url("+imgUrl+")");
            }

        });
        return Stage;
    }
);