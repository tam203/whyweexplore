define(['dojo/_base/declare','whyweexplore/roomplayer/room/theRoom',
    'whyweexplore/roomplayer/gameAction/actions/caption/CaptionGameAction'],
    function(declare, room, CaptionGameAction){
    var GameActionController = declare(null,{
        execute:function(event){
            var actions = room.getGameActions();
            var actionFound = false;
            for(var i=0; i < actions.length; i++)
            {
                var action = actions[i];
                if(action.isBetween(event.between)){
                    actionFound = true;
                    action.execute();
                };
            }
            if(!actionFound){
                var defaultAction = new CaptionGameAction({type:"caption", caption:"That doesn't do anything..."});
                defaultAction.execute();
            }
        }
    });

    return GameActionController;
});