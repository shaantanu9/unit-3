let total = 0;

let cartArray = JSON.parse(localStorage.getItem('cart'))

showCart(cartArray);


function showCart() {

document.querySelector('.productWrapper').innerHTML = '';


// cartArray = JSON.parse(localStorage.getItem('cart'))

cartArray.forEach(function(item, index){


 productItem = document.createElement('div')
        productItem.id = index;
        // productItem.class = 'p'+index;
        productItem.setAttribute('class', 'product')
        // productItem.setAttribute('class', 'product'+index)

        productImg = document.createElement("img");
        productImg.src = item.image

        productName = document.createElement("p");
        productName.innerHTML = item.name;

        addCart = document.createElement("button")
        addCart.innerHTML = "Delete from Cart";
        addCart.id = index;
        // addCart.onclick = del2Cart(this.id);
        addCart.setAttribute('onclick','del2Cart(this.id)')

        productPrice = document.createElement("a");

        productPrice.innerHTML = item.price;

        productPrice.id = 'productPrice';

        total+=(+item.price);

        document.querySelector('.totalPrice').innerHTML = total;
     productItem.append(productImg,productName,addCart, productPrice)
    document.querySelector('.productWrapper').append(productItem);
   



})


}

function del2Cart(id){


let cartArray = JSON.parse(localStorage.getItem('cart'))


const removeNumber = (arr, num) => arr.filter(el.name => el.name !== num);
numbers = removeNumber(cartArray, id);

localStorage.setItem('cart', JSON.stringify(numbers));

let cartArrayAfter = JSON.parse(localStorage.getItem('cart'))


showCart(cartArrayAfter);
}