setTimeout(function(){
  $(".sk-folding-cube").fadeOut( "slow", function() {
     $(".content").fadeIn(1200);
     Particles.init({ selector: '.background' });
     $('.content h1').addClass('animated fadeInUp');
  })
}, 1200);
