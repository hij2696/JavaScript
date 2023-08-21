var tab_button = $('.tab-button');
var tab_content = $('.tab-content');

function tabOpen(number) {
  tab_button.removeClass('orange');
  tab_button.eq(number).addClass('orange');
  tab_content.removeClass('show');
  tab_content.eq(number).addClass('show');
}

// 1. for문 활용
// for (let i = 0; i < tab_button.length; i++) {
//   tab_button.eq(i).on('click', function() {
//     tabOpen(i);
//   });
// }

// 2. 이벤트 버블링 / dataset 활용
$('.list').click(function(e) {
  tabOpen(parseInt(e.target.dataset.id));
});

var car = ['sonata', 50000, 'white']; // Array
var car2 = {name: 'sonata', price: [50000, 30000, 40000]}; // Object

document.querySelector('.car-title').innerHTML = car2.name;
document.querySelector('.car-price').innerHTML = car2.price[2];

// javascript로 html 생성법 1 (생성법 2에 비해 2배정도 빠름)
var a = document.createElement('p');
a.innerHTML = 'hi';
document.querySelector('#test').appendChild(a);

// javascript로 html 생성법 2
var template = '<p>hi</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', template);
$('#test').append(template); //jquery version

// hat: html 생성, shirts, pants : for-each 반복문
var shirts = [95, 100, 105];
var pants = [28, 30, 32, 34];
$('.form-select').eq(0).on('input', function() {
  if (this.value == 'hat') {
    $('.form-select').eq(1).removeClass('form-hide');
    var temp = `<option>52</option>
    <option>54</option>`;
    $('.form-select').eq(1).html(temp);
  }
  else if (this.value == 'shirts') {
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    shirts.forEach(function(size) {
      $('.form-select').eq(1).append(`<option>${size}</option>`);
    });
  }
  else if(this.value == 'pants') {
    $('.form-select').eq(1).removeClass('form-hide');
    $('.form-select').eq(1).html('');
    pants.forEach((size) => {
      $('.form-select').eq(1).append(`<option>${size}</option>`);
    });
  }
});

// for-in 반복문
var obj = {name: 'injae', age: 26};
for (var key in obj) console.log(obj[key]);

// ajax로 GET 요청하는 방법
// $.get()은 JSON → object 자동 변환해줌
$.get('https://codingapple1.github.io/price.json')
  .done(function(data) {
    console.log(data.price);
  }).fail(function() {
    console.log('failed');
  });

// ajax로 POST 요청하는 법
// axios 라이브러리 : ajax 편하게 쓰고 싶을 때 사용함
$.post('https://codingapple1.github.io/hello.txt', {name: hwang})
  .done(function(data) {
    console.log(data);
  }).fail(function() {
    console.log('failed');
});

// 브라우저 기본 함수 fetch 써도 ajax 가능
// (참고) server와 user는 문자 자료만 주고받을 수 있음
fetch('https://codingapple1.github.io/price.json')
  .then(res => res.json()) // 받아온 json을 object로 바꿔주는 기능
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })