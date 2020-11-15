var canvas = new fabric.Canvas("myCanvas");
var x_position = 10;
var y_position = 10;
var block_image_width = 30;
var block_image_height = 30;
var player_image_object = "";
var block_image_object = "";
function player_update(){
    fabric.Image.fromURL("player.png", function(uploaded_player_image){
        player_image_object = uploaded_player_image;
        player_image_object.scaleToWidth(100);
        player_image_object.scaleToHeight(120);
        player_image_object.set({
            top: y_position,
            left: x_position
        });
        canvas.add(player_image_object);
    });
}
function object_update(new_image){
    fabric.Image.fromURL(new_image, function(uploaded_object_image){
        block_image_object = uploaded_object_image;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top: y_position,
            left: x_position
        });
        canvas.add(block_image_object);
    });
}
player_update();
/*object_update("roof.jpg");*/
window.addEventListener("keydown", my_keydown);
function my_keydown(event){
    keypressed = event.keyCode;
    console.log(keypressed);
    if (event.shiftKey == true && keypressed == '80') {
        console.log("Shift & letter P are pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (event.shiftKey == true && keypressed == '77') {
        console.log("Shift & letter M are pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keypressed == '37') {
        left();
        console.log("Left arrow key is pressed");
    }
    if (keypressed == '38') {
        up();
        console.log("Up arrow key is pressed");
    }if (keypressed == '39') {
        right();
        console.log("Right arrow key is pressed");
    }if (keypressed == '40') {
        down();
        console.log("Down arrow key is pressed");
    }
    if (keypressed == '67') {
        object_update("cloud.jpg");
        console.log("Letter C is pressed");
    }
    if (keypressed == '68') {
        object_update("dark_green.png");
        console.log("Letter D is pressed");
    }
    if (keypressed == '71') {
        object_update("ground.png");
        console.log("Letter G is pressed");
    }
    if (keypressed == '76') {
        object_update("light_green.png");
        console.log("Letter L is pressed");
    }
    if (keypressed == '82') {
        object_update("roof.jpg");
        console.log("Letter R is pressed");
    }
    if (keypressed == '84') {
        object_update("trunk.jpg");
        console.log("Letter T is pressed");
    }
    if (keypressed == '85') {
        object_update("unique.png");
        console.log("Letter U is pressed");
    }
    if (keypressed == '87') {
        object_update("wall.jpg");
        console.log("Letter W is pressed");
    }
    if (keypressed == '89') {
        object_update("yellow_wall.png");
        console.log("Letter Y is pressed");
    }
}
function left(){
    if (x_position >= 0) {
        x_position=x_position-block_image_width;
        console.log("x position of the player is"+x_position);
        console.log("y position of the player is"+y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function right(){
    if (x_position <= 700) {
        x_position=x_position+block_image_width;
        console.log("x position of the player is"+x_position);
        console.log("y position of the player is"+y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function up(){
    if (y_position >= 10) {
        y_position=y_position-block_image_height;
        console.log("x position of the player is"+x_position);
        console.log("y position of the player is"+y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}
function down(){
    if (y_position <= 500) {
        y_position=y_position+block_image_height;
        console.log("x position of the player is"+x_position);
        console.loglog("y position of the player is"+y_position);
        canvas.remove(player_image_object);
        player_update();
    }
}