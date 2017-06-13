    var socket = io();
    var userdetail = '';
    socket.on('socketToMe', function (data) {
      userdetail = data;
      console.log(userdetail);
    });
    console.log("external");