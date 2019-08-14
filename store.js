
window.onload = init()
updateTotal()
function init() {

  var item = document.getElementsByClassName("danger-btn")
  for (var i=0; i<item.length; i++) {
    var specificItem = item[i]
    specificItem.addEventListener('click',removeItem)}

  var quantity = document.getElementsByClassName('cart-quantity-input')
  for (var j=0; j<quantity.length; j++) {
    var quantElement = quantity[j]
    quantElement.addEventListener("change", quantityChanged )


  }
  var addToCart = document.getElementsByClassName('add-btn')
  //console.log(addToCart)
  for (var i=0; i<addToCart.length; i++) {
    var button = addToCart[i]
    button.addEventListener('click', addButtonClicked)
  }
  var purchase = document.getElementsByClassName('purchase-btn')[0]
  purchase.addEventListener('click', purchaseClick)

}

function purchaseClick() {
  alert("Thank you for your purchase!")
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while( cartItems.hasChildNodes()){
    cartItems.removeChild(cartItems.firstChild)
  }

  updateTotal()
}

function addButtonClicked(event) {
  var button = event.target
  var storeItem = button.parentElement.parentElement
  var imageSrc = storeItem.getElementsByClassName('item-image')[0].src
  var title = storeItem.getElementsByClassName('item-title')[0].innerText
  var price = storeItem.getElementsByClassName('item-price')[0].innerText
  //var quantity = storeItem.getElementsByClassName('quantity')[0].value
  console.log(title, imageSrc, price)
  addItemToCart(title, imageSrc, price)
}

function addItemToCart(title, imageSrc, price, quantity) {
  var newRow = document.createElement('div')
  var parent = document.getElementsByClassName('cart-items')[0]
  parent.append(newRow)
  var cartItemNames = document.getElementsByClassName('cart-item-title')
  for (var i=0; i<cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("item is already in cart")
      return
    }
  }
  var newRowContent =
    `<div class="cart-item cart-column">

        <img class="cart-item-image" src="${imageSrc}">
        <span class="cart-item-title">${title}</span>

    </div>
      <span class="cart-price cart-price-num cart-column">${price}</span>
      <div class=" cart-quantity cart-column">

        <input type="number" name="" value="1" class = "cart-quantity-input">
        <button type="button" name="button" class="btn danger-btn">REMOVE</button>

    </div>`
    newRow.innerHTML = newRowContent
    newRow.classList.add('cart-row')
    newRow.getElementsByClassName('danger-btn')[0].addEventListener('click', removeItem)
    newRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
    updateTotal()


}
function quantityChanged(event){
  var quant = event.target
  if (isNaN(quant.value)||(quant.value<=0)){
    quant.value = 1
  }
  updateTotal()
}

function removeItem(event) {
    var thing = event.target
    thing.parentElement.parentElement.remove()
    updateTotal()
  }

function updateTotal() {
  var price = document.getElementsByClassName("cart-price-num")
  var quantity = document.getElementsByClassName('cart-quantity-input')
  total = 0
  for (var i=0; i<price.length; i++) {
    var priceElement = price[i]
    var quantElement = quantity[i].value
    //console.log(quantElement)
    priceElement = priceElement.innerText.replace("$",'')
    //console.log(priceElement)
    var total
    total += (parseFloat(priceElement)*parseInt(quantElement))
    total = Math.round(total*100)/100
  }
  var real_total = document.getElementById("cart-total-value")
  real_total.innerHTML = '$'+JSON.stringify(total)
}



  //console.log(specificItem)}
