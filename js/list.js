var products = [
  { id : 0, price : 70000, title : 'Blossom Dress' },
  { id : 1, price : 50000, title : 'Springfield Shirt' },
  { id : 2, price : 60000, title : 'Black Monastery' }
];

for (let i = 0; i < products.length; i++) {
  $('.card-body h5').eq(i).html(products[i].title);
  $('.card-body p').eq(i).html('가격 : ' + products[i].price);
}

// 백틱기호 활용
var a = 'in';
console.log(`hwang${a}jae`);