var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

products.forEach((data) => {
  var template = 
  `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100">
    <h5>${data.title}</h5>
    <p>가격 : ${data.price}</p>
    <button class="buy">purchase</button>
  </div>`;
  $('.row').append(template);
});

$('#more').click(function() {
  $.get('https://codingapple1.github.io/js/more1.json')
  .done((data) => {
    data.forEach((a, i) => {
      var template = 
      `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${data[i].title}</h5>
        <p>가격 : ${data[i].price}</p>
      </div>`;
      $('.row').append(template);
    });
  });
});

var arr = [7, 3, 5, 2, 40];

arr.sort(); // 문자 정렬
console.log(arr);

arr.sort(function(a, b) { return a - b; }); // 오름차순 정렬
console.log(arr);
arr.sort(function(a, b) { return b - a; }); // 내림차순 정렬
console.log(arr);

var arr2 = ['b', 'c', 'a'];

arr2.sort(); // 문자 오름차순 정렬
console.log(arr2);

arr2.sort(function(a, b) {
  return a < b ? 1 : -1;
}); // 내림차순 정렬
console.log(arr2);

// 가격 순 정렬
$('#price').click(function() {
  products.sort(function(a, b) {
    return a.price - b.price;
  });

  $('.row').html('');

  products.forEach((data) => {
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}</p>
    </div>`;
    $('.row').append(template);
  });
});

// array 자료 원하는 것만 필터하려면 .filter()
// .filter()는 신문법이어서 새로운 변수 안에 반드시 담아야만 함
// .sort()는 원본 변형 O, .filter()는 원본 변형 X
var newArr = arr.filter(function(a) {
  return a < 4;
});
console.log(newArr);

// array 자료 전부 변형하려면 .map()
var newArr2 = arr.map(function(a) {
  return a * 4;
});
console.log(newArr2);

//상품명 내림차순 정렬 기능
$('#name').click(function() {
  products.sort(function(a, b) {
    return a.title < b.title ? 1 : -1;
  });

  $('.row').html('');

  products.forEach((data) => {
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}</p>
    </div>`;
    $('.row').append(template);
  });
});

// 6만원 이하 상품보기 기능
$('#filter').click(function() {
  var newProducts = products.filter(function(data) {
    return data.price <= 60000;
  });

  $('.row').html('');

  newProducts.forEach((data) => {
    var template = 
    `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100">
      <h5>${data.title}</h5>
      <p>가격 : ${data.price}</p>
    </div>`;
    $('.row').append(template);
  });
});

// 로컬 스토리지 활용법
localStorage.setItem('name', 'hwang'); // 저장
localStorage.getItem('name'); // 출력
localStorage.removeItem('name'); // 삭제

// localStorage에 array, object 강제로 저장하는 방법 : JSON으로 바꾸어 저장
var arr = [1,2,3];
var newArr = JSON.stringify(arr); // array, object → JSON : JSON.stringify() 활용
localStorage.setItem('num', newArr);

var pull = localStorage.getItem('num'); // JSON → array, object : JSON.parse() 활용
console.log(JSON.parse(pull)[0]);

// 로컬 스토리지 자료 수정 방법
// 1. 자료를 꺼낸다.
// 2. 꺼낸 것을 수정한다.
// 3. 다시 넣는다.

// 구매 버튼을 누르면 상품명을 localStorage에 저장
$('.buy').click(function(e) {
  var title = $(e.target).siblings('h5').text();
  if (localStorage.getItem('cart') != null) {
    var pull = JSON.parse(localStorage.cart);
    pull.push(title);
    localStorage.setItem('cart', JSON.stringify(pull));
  }
  else {
    localStorage.setItem('cart', JSON.stringify([title]));
  }
});