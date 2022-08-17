// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const priceProd = price.innerText
  const quantProd = quantity.valueAsNumber
  const subtotalPrice = priceProd * quantProd
  product.querySelector('.subtotal span').innerText = subtotalPrice
  return subtotalPrice
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 and 3
  const subtotals = document.getElementsByClassName('product')
  let sumTotal = 0
  for (let i = 0; i < subtotals.length; i++) {
    subtotals[i] = updateSubtotal(subtotals[i])
    sumTotal += updateSubtotal(subtotals[i])
  }
   return document.querySelector('#total-value span').innerText = sumTotal
}

// ITERATION 4

function removeProduct(event) { // ERRO! Está sumindo o botão e não o produto inteiro
  const target = event.currentTarget;
  target.parentNode.removeChild(target)
  console.log('The target in remove is:', target);
}
window.addEventListener('load', () => {
  const removeBtn = document.getElementsByClassName('btn-remove');
  // let total = document.querySelector('#total-value span').innerText
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
    // total =- removeBtn[i].querySelector('.subtotal span').innerText
  } // Deduzir o subtotal removido do valor total
})

  

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
