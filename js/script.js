function openCloses(evt, closesName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(closesName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

$('.headeer__content-btn1').on('click', function() {
  $('html,body').animate({scrollTop:$('.tablinks1').offset().top+"px"},{duration:1E3});
});
$('.headeer__content-btn2').on('click', function() {
  $('html,body').animate({scrollTop:$('.tablinks2').offset().top+"px"},{duration:1E3});
});
$('.menu__link1').on('click', function() {
  $('html,body').animate({scrollTop:$('.section__tab').offset().top+"px"},{duration:1E3});
});
$('.menu__link2').on('click', function() {
  $('html,body').animate({scrollTop:$('.section__fashion').offset().top+"px"},{duration:1E3});
});
$('.menu__link4').on('click', function() {
  $('html,body').animate({scrollTop:$('.footer').offset().top+"px"},{duration:1E3});
});
