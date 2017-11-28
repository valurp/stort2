var videoContainer = document.getElementById('videoContainer');
var video = document.getElementById('video');
var videoControls = document.getElementById('video-controls');

//fela default controls
video.controls = false;

var back = document.getElementById('back');
var playpause = document.getElementById('play');
var mute = document.getElementById('mute');
var full = document.getElementById('full');
var next = document.getElementById('next');

//virkni á takka
playpause.addEventListener('click', function(e) {
  if (video.paused || video.ended) {video.play();}
  else {video.pause();}
})

back.addEventListener('click', function(e) {
  if (video.currentTime < 3) {
    video.currentTime = 0;
  } else {
    video.currentTime -= 3;
  }
})

mute.addEventListener('click', function(e) {
   video.muted = !video.muted;
});

next.addEventListener('click', function(e) {
  if (video.currentTime > video.duration - 3) {
    video.currentTime = video.duration;
  } else {
    video.currentTime += 3;
  }
})

//athuga hvort browser styðji Fullscreen API
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);

full.addEventListener('click', function(e) {
   handleFullscreen();
});

//athuga hvort vafri sé nú þegar í fullScreen
var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}

var setFullscreenData = function(state) {
   videoContainer.setAttribute('data-fullscreen', !!state);
}

var handleFullscreen = function() {
   if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
   }
   else {
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
      else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
      setFullscreenData(true);
   }
}
