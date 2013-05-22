define(['whyweexplore/roomplayer/gameAction/actions/caption/CaptionGameAction',
        'whyweexplore/roomplayer/gameAction/actions/item/ItemGameAction'],
    function(CaptionGameAction, ItemGameAction){
    var GameActionParser = {
        parse:function(interactions){
            var interactionObjects = [];
            for(var i=0; i < interactions.length; i++){
                var interaction = interactions[i];
                if(interaction.show || interaction.hide) {
                    interactionObjects.push(new ItemGameAction(interaction));
                }
                if(interaction.caption){
                   interactionObjects.push(new CaptionGameAction(interaction));
                }
            }
            return interactionObjects;
        }
    }
    return GameActionParser
});
