$('.navbar-toggler').on('click', function () {
  $('.list-group').toggle('show');
});

$('#login').on('click', function () {
  $('.black-bg').addClass('show-modal');
});

$('#close').on('click', function () {
  $('.black-bg').removeClass('show-modal');
});

$('form').on('submit', function (e) {
  var inputValue = document.getElementById('email').value;
  if (inputValue == '') {
    alert('아이디를 입력해주세요.');
    e.preventDefault;
  }
  if (/\S+@\S+./.test(inputValue)) {
    alert('이메일 형식이 아닙니다.');
    e.preventDefault;
  }
});

let checked = true;

$('#badge').on('click', function () {
  if (checked) {
    $('#badge').html('Light 🔄');
    checked = false;
  }
  else {
    $('#badge').html('Dark 🔄');
    checked = true;
  }
});

setInterval(function () {
  $('.alert').hide();
}, 1000);

var currentPicture = 1;

$('.next').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-' + currentPicture + '00vw)')
  currentPicture++;
});
$('.slide-1').on('click', function () {
  $('.slide-container').css('transform', 'translateX(0vw)');
  currentPicture = 1;
});
$('.slide-2').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-100vw)');
  currentPicture = 2;
});
$('.slide-3').on('click', function () {
  $('.slide-container').css('transform', 'translateX(-200vw)');
  currentPicture = 3;
});

// window.addEventListener('scroll', function() {
//   window.scrollY
// });
$(window).on('scroll', function () {
  if ($(window).scrollTop() > 100) {
    $('.navbar-brand').css('font-size', '20px');
  }
  else {
    $('.navbar-brand').css('font-size', '25px');
  }
});

$('.lorem').on('scroll', function () {
  var x = document.querySelector('.lorem').scrollTop;
  var y = document.querySelector('.lorem').scrollHeight;
  var z = document.querySelector('.lorem').clientHeight;
  if (x + z > y - 10) {
    alert('다 읽었습니다.');
  }
});

document.querySelector('.black-bg').addEventListener('click', function(e) {
  if ($(e.target).is($('.black-bg'))) {
    document.querySelector('.black-bg').classList.remove('show-modal');
  }
});