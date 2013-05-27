<?php
/**/
class ImageBehavior extends ModelBehavior {

    function setup(&$model, $config = array()) {
        $model->max_width = 600;
        $model->max_heigth = 600;
        $model->max_file_size = 720000;
        $model->sub_dir = $model->name;
        $model->destination_dir = WWW_ROOT.'img';
        $model->www_path = '/'.'img';

        if(is_numeric($config)){
            $model->max_width = $config;
            $model->max_heigth = $config;
        }
        else{
            if(isset($config['max_height']))  $model->max_height = $config['max_height'];
            if(isset($config['max_width'])) $model->max_width = $config['max_width'];
            if(isset($config['sub_dir'])){
                $model->destination_dir = $model->destination_dir.DS.$config['sub_dir'];
                $model->www_path = $model->www_path.'/'.$config['sub_dir'];
            }
        }
    }

    function new_dir($dirname){
        if(!empty($dirname)){
            $model->destination_dir = $model->destination_dir.DS.$dirname;
            $model->www_path = $model->www_path.'/'.$dirname;
            return true;
        }
        return false;
    }

    function beforeDelete(&$model){
        // delete the image file befor removing entry
        $location = $model->field('location');
        if(is_file($location)){
               unlink($location);
        } else {
            $location = WWW_ROOT.str_replace('/',DS,$model->field('www_path'));
            if(is_file($location)){
               unlink($location);
            }
        }
        return true;
    }

	function beforeSave(&$model) {
        if(empty($model->data[$model->name]['upload']['tmp_name'])){
            return true;
        }
        else{
            $temp_location = $model->data[$model->name]['upload']['tmp_name'];
            $name = $model->data[$model->name]['upload']['name'];
            $mime_type = $model->data[$model->name]['upload']['type'];
            $new_name = time().'_'.str_replace(' ','_',$name ); // add time stamp for uniqueness, get rid of spaces too.
            $destination = $model->destination_dir;
            $www_path = $model->www_path;
            $target = $destination . DS . $new_name ;
            if (!is_writeable($destination)){ 
                if(is_dir($destination)){return false;}
                else if(!mkdir($destination)){return false; }
            }
            $max_width = $model->max_width;
            $max_height = $model->max_height;
            list($width, $height) = getimagesize($temp_location);
            // set the atributes
            $model->data[$model->name]['name'] = $new_name;
            $model->data[$model->name]['location'] = $target;
            $model->data[$model->name]['www_path'] = $www_path.'/'.$new_name;
            $model->data[$model->name]['mime_type'] = $mime_type;
            if(!isset($model->data[$model->name]['alt']) and isset($model->data[$model->name]['caption'])){
                $model->data[$model->name]['alt'] = $model->data[$model->name]['caption'];
            } else if (!isset($model->data[$model->name]['alt']) and !isset($model->data[$model->name]['caption'])){
                $model->data[$model->name]['alt'] = '';
                $model->data[$model->name]['caption'] = '';
            }
            if($width > $max_width or $height > $max_height){ //resize if to big
                list($new_width,$new_height) = $this->__getScaledDimentions($temp_location, $max_width,$max_height);
                $model->data[$model->name]['height'] = $new_height;
                $model->data[$model->name]['width'] = $new_width;
                if($this->__resize($temp_location,$target,$new_width,$new_height)){
                    $model->data[$model->name]['size'] = filesize($target);
                    return true;
                } else {
                    return false;
                }
            } else{
                 $model->data[$model->name]['size'] = filesize($temp_location);
                 $model->data[$model->name]['height'] = $height;
                 $model->data[$model->name]['width'] = $width;
                 if(copy($temp_location,$target)){
                     return true;
                 } else {
                    return false;
                 }
            }
        }
	}

    function __getScaledDimentions($image_path, $max_width = 400, $max_height = 400) {
        $max_width_to_height = $max_width/$max_height ;
        // a bit of logic to make images display nicely regardless of size and shape.
        list($width, $height) = getimagesize($image_path);
        if ($width/$height > $max_width_to_height && $width > $max_width){
            $new_width=$max_width;
            $new_height=($max_width/$width) * $height;
        } else
        if ( $width/$height < $max_width_to_height && $height > $max_height){
            $new_height = $max_height;
            $new_width = ($max_height/$height) * $width;
        }
        else
        if (  $width/$height == $max_width_to_height && $height > $max_height){
            $new_width = $max_width;
            $new_height = $max_height;
        } else {
            $new_width = $width;
            $new_height = $height;
        }
        return array($new_width,$new_height);
    }

    function __resize($original_image,$target,$new_width,$new_height,$quality=75){
        list($width, $height, $type) = getimagesize($original_image);
        // open file
        $ext = $this->__image_type_to_extension($type);
        switch($ext) //open original as image
        {
            case 'gif' :
                $original_image = imagecreatefromgif($original_image);
                break;
            case 'png' :
                $original_image = imagecreatefrompng($original_image);
                break;
            case 'jpg' :
            case 'jpeg' :
                $original_image = imagecreatefromjpeg($original_image);
                break;
            default :
                //image type is not a possible option
                return false;
                break;
        }
        // Resize the original image
        $image_resized = imagecreatetruecolor($new_width, $new_height);
        imagecopyresampled($image_resized, $original_image, 0, 0, 0, 0, $new_width, $new_height, $width, $height);
        //save resized
        switch($ext)
        {
            case 'gif' :
                imagegif($image_resized, $target, $quality);
                break;
            case 'png' :
                imagepng($image_resized, $target, $quality);
                break;
            case 'jpg' :
            case 'jpeg' :
                imagejpeg($image_resized, $target, $quality);
                break;
            default :
                return false;
                break;
        }
        imagedestroy($image_resized);
		imagedestroy($original_image);

        return true;
    }

    function __image_type_to_extension($imagetype)
	{
	if(empty($imagetype)) return false;
		switch($imagetype)
		{
			case IMAGETYPE_GIF    : return 'gif';
			case IMAGETYPE_JPEG    : return 'jpg';
			case IMAGETYPE_PNG    : return 'png';
			case IMAGETYPE_SWF    : return 'swf';
			case IMAGETYPE_PSD    : return 'psd';
			case IMAGETYPE_BMP    : return 'bmp';
			case IMAGETYPE_TIFF_II : return 'tiff';
			case IMAGETYPE_TIFF_MM : return 'tiff';
			case IMAGETYPE_JPC    : return 'jpc';
			case IMAGETYPE_JP2    : return 'jp2';
			case IMAGETYPE_JPX    : return 'jpf';
			case IMAGETYPE_JB2    : return 'jb2';
			case IMAGETYPE_SWC    : return 'swc';
			case IMAGETYPE_IFF    : return 'aiff';
			case IMAGETYPE_WBMP    : return 'wbmp';
			case IMAGETYPE_XBM    : return 'xbm';
			default                : return false;
		}
	}
}

?>