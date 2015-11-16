$(function() {
  var socket = io.connect();

  socket.on('outgoing-msg', function (msg) {
    $('#messages').append('<li>' +msg+ '</li>');
  });

  $('#chat-form').on('submit', function (e) {
    e.preventDefault();
    var msg = $('#m').val();
    socket.emit('incoming-msg', msg);
    $('#m').val('');
  });
});