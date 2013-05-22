define(['dojo/_base/declare', 'whyweexplore/roomplayer/gameAction/actions/GameAction'],
    function(declare, GameAction){
    var CaptionGameAction = declare([GameAction],{
        constructor: function(definition){
            this.caption = definition.caption;
        },
        execute:function(){
            alert(this.caption);
        }
    });

    return CaptionGameAction;
})