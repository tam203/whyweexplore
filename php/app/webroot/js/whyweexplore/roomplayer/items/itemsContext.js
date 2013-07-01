define(['dojo/topic',
    'whyweexplore/roomplayer/items/events/ItemClickedEvent',
    'whyweexplore/roomplayer/items/controller/ItemClickedController',
    'dojo/_base/lang'],

    function(topic, ItemClickedEvent, ItemClickedController, lang){
        return {
            execute: function(){
                var controler = new ItemClickedController();
                topic.subscribe(ItemClickedEvent.ITEM_CLICKED,
                    lang.hitch(controler, controler.execute));
            }
        }

    });