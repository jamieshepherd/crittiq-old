// Vue debugging (true/false)
Vue.config.debug = true;

// Loading overlay
$(window).load(function(){
    $('#loading').fadeOut(500);
})

// Convert any sliders to HTML
$('input[type="range"]').rangeslider({ polyfill: false });

// When modal is clicked, hide account
$('#modal').click(function () {
    $('#modal').fadeOut(300);
    $('#account').fadeOut(300);
});

// Logo
BackgroundCheck.init({
  targets: '.logo',
  images: '.cover',
  threshold: 80
});
