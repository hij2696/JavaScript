$(window).scroll(function() {
  var height = $(window).scrollTop();
  console.log(height);
  var y = (-1/500) * height + (115/50);
  $('.card-box').eq(0).css('opacity', y);
  var z = (-1/5000) * height + 565/500;
  $('.card-box').eq(0).css('transform', `scale( ${z} )`);
});