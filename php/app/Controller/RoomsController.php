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

    public $components = array('RequestHandler');

    public function upload_image_for_room($room_id, $uid){
        $this->layout = "simple_html";
        $callback = (!empty($_POST['callback']))? $_POST['callback'] : "top.newRoomImage('$uid','%URL');";
        $url = '';
        if(!empty($_FILES['image'])){
            $image = array('RoomImage' => array('upload' => $_FILES['image']));
            $image['RoomImage']['room_id'] = $room_id;
            if(!$this->Room->RoomImage->save($image)){
                $url = "ERROR";
            }
            $url = $this->Room->RoomImage->field('www_path');
        }
        $callback = str_replace('%URL', $url , $callback);
        $this->set('callback', $callback);
    }

    public function api($id=null){
        $this->RequestHandler->renderAs($this, 'json');
        //if(!empty($id) || $this->request->is('post') ){
        if(!$this->request->is('get') ){
            $postedRoom = $this->request->input('json_decode');
            if(property_exists($postedRoom, "title")){
                $this->Room->set("title", $postedRoom->title);
            }
            if($this->request->is('put') && $id){
                $postedRoom->id = $id;
            } else if(!property_exists($postedRoom, 'id') || empty($postedRoom->id) ){
                $new_id = uniqid();
                $postedRoom->id = $new_id;
            }
            $this->Room->set("id", $postedRoom->id);
            $this->Room->set("rules", json_encode($postedRoom));
            if($this->Room->save()){
                $this->set("room", json_encode($postedRoom));
                $this->set("_serialize", "room");
            }else{
                die("error");
            };
        } else if($id) {
            $room = $this->Room->read(null, $id);
            $this->set("room", json_decode($room['Room']['rules']));
            $this->set("_serialize", "room");

        } else {

            $rooms = $this->Room->find('all');
            foreach($rooms as $room)
            {
                $rooms[] = $room['Room']['rules'];
            }
            $this->set("rooms", $rooms);
            $this->set("_serialize", "rooms");
        }

    }


}
