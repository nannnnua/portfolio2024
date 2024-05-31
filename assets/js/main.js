// https://github.com/aamirafridi/jQuery.Marquee
$(document).ready(function() {
  $('.marquee').marquee({
    duration: 20000,
    gap: 0,
    delayBeforeStart: 0,
    direction: 'right',
    duplicated: true,
    pauseOnHover: true,
    startVisible: true
  });
});