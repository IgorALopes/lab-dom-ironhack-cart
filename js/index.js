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

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target)
  // const row = target.parentNode.parentNode
  // const parent = row.parentNode
  // parent.removeChild(row)
  target.parentNode.parentNode.parentNode.removeChild(target.parentNode.parentNode)

  calculateAll()
}
 

// ITERATION 5

function createProduct(event) {
  const createRow = document.querySelector('.create-product');
  let newProdNameInput = createRow.querySelector('input');
  let newProdNameValue = newProdNameInput.value;
  let newProdPriceInput = createRow.querySelector("input[type='number']");
  let newProdPriceValue = Number(newProdPriceInput.valueAsNumber).toFixed(2);

  const newTableRow = document.createElement('tr');
  newTableRow.className = 'product';
  newTableRow.innerHTML = `
    <td class="name">
      <span>${newProdNameValue}</span>
    </td>
    <td class="price">$<span>${newProdPriceValue}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</>
    </td>
  `;

  // get the parent of this newly created row
  const parent = document.querySelector('#cart tbody');

  // append the newly created row to the parent
  parent.appendChild(newTableRow);

  // make sure remove button inherits the same behavior as other remove buttons
  const removeBtn = newTableRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct);

  // clean the fields
  newProdNameInput.value = '';
  newProdPriceInput.value = 0;
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('btn-remove');
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener('click', removeProduct);
  }

  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
