var Peer = require('simple-peer')


navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(function(stream){
  var p = new Peer({
    initiator: location.hash === '#1',
    trickle: false,
    stream: stream
  })


  p.on('error', function (err) { console.log('error', err) })

  p.on('signal', function (data) {
    console.log('SIGNAL', JSON.stringify(data))
    document.querySelector('#outgoing').textContent = JSON.stringify(data)
  })

  document.querySelector('form').addEventListener('submit', function (ev) {
    ev.preventDefault()
    p.signal(JSON.parse(document.querySelector('#incoming').value))
  })

  p.on('connect', function () {
    console.log('CONNECT')
    p.send('whatever' + Math.random())
  })

  p.on('data', function (data) {
    console.log('data: ' + data)
  })

  p.on('stream', function (stream) {
      // got remote video stream, now let's show it in a video tag
    var video = document.querySelector('video')
    video.src = window.URL.createObjectURL(stream)
    video.play()
  })

});

var loc = 30;
document.getElementById("left").addEventListener("click", function(){
    loc += 1;
    $("#videobox").css("left", loc+"%");
});
document.getElementById("right").addEventListener("click", function(){
    loc -= 1;
    $("#videobox").css("left", loc+"%");
});
