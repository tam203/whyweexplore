<?php
/**
 * Created by IntelliJ IDEA.
 * User: theo
 * Date: 26/05/13
 * Time: 14:36
 * To change this template use File | Settings | File Templates.
 */
class RoomsController extends AppController {

    public $name = 'Rooms';

    public $uses = array('Room');

    public function uploadImageForRoom($room_id){
        $this->layout = "simple_html";
        $callback = (!empty($_POST['callback']))? $_POST['callback'] : '';
        $url = '';
        if(!empty($_FILES['image'])){
            $image = array('RoomImage' => array('upload' => $_FILES['image']));
            $image['RoomImage']['room_id'] = $room_id;
            if($this->Room->RoomImage->save($image)){
                debug("Saved");
            } else{
                debug("Failed to Save");
            }
            $url = $this->Room->RoomImage->field('www_path');
        }
        $callback = str_replace('%URL', $url , $callback);
        $this->set('callback', $callback);
    }


}
