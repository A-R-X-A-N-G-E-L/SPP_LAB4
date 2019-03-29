
var socket = io();
let firstTime = true;

var i = 1;
setInterval(function() {
/*	if (firstTime) {
		socket.emit("/", "newUser");
		firstTime = false;
	}*/

	$("#logout-action").submit(function(wind) {
		// prevents page reloading
        wind.preventDefault();
        socket.emit("logout", "logout");     

    });

    $("#send-message-action").submit(function(wind) {   
        wind.preventDefault();
        socket.emit("chat message", $("#mes").val());
        $("#mes").val("");         
    });

    $("#chatroom-action").submit(function(wind) {   
        wind.preventDefault();
        socket.emit("chatroom", "chatroom");         
    });

    socket.on("chat message", function(message) {
        $("#messages").append($("<li>").text(message));     
    });

    socket.on("logout", function(message) {
    	$("body").empty();
    	let element = document.getElementsByTagName("body");
    	element[0].insertAdjacentHTML("afterbegin", message);    
	});

	socket.on("chatroom", function(message) {
    	$("body").empty();
    	let element = document.getElementsByTagName("body");
    	element[0].insertAdjacentHTML("afterbegin", message);
	});
} , 100);