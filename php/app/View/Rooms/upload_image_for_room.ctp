<?php if(!empty($callback)):?>
    <script type="text/javascript">
        <?php echo $callback;?>
    </script>
<?php endif;?>

<form action="." method="post" enctype="multipart/form-data">
    <input name="room_id" type="hidden" />
    <input name="callback" type="hidden" />
    <input type="file" name="image">
</form>