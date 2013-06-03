    <script type="text/javascript">
        function setCallback(str){
            document.getElementById("callbackinput").value = "str";
        }
        function submit(){
            document.getElementById("imageForm").submit();
        }

        function setImageId(id){
            document.getElementById("imageForm").action = './' + id;
        }
        <?php if(!empty($callback)):?>
            <?php echo $callback;?>
        <?php endif;?>
    </script>

<form id="imageForm" action="" method="post" enctype="multipart/form-data">
    <input name="room_id" type="hidden" />
    <input id="callbackinput" name="callback" type="hidden" />
    <input type="file" name="image"/ >
    <input type="submit" name="upload" />
</form>