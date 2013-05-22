define(
    ['whyweexplore/roomplayer/room/theRoom',
     'whyweexplore/roomplayer/view/theStage',
     'whyweexplore/roomplayer/setup/appContext',
     'dojo/_base/xhr'],
    function(theRoom, theStage, appContext, xhr){
        return function(){
            appContext.execute();
			var url = location.hash.substr(1);
			if(url.search("http") != 0)
			{
				url = 'rooms/' + url + '.json';
			}
            xhr.get({
                url: url,
                handleAs:"json"
            }).then(function(roomData){
                    theRoom.loadRoom(roomData);
                    theStage.setBackground(theRoom.background);
            }).then(function(){
                theRoom.addObjectsToStage(theStage);
            });
        }
    }
);
