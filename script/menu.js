
add1plate = document.querySelector('#plate');
add1plate.innerHTML = JSON.parse(localStorage.getItem('cart')).length

getJson('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

async function getJson(url) {
    
    let data = await fetch(url);
    let res = await data.json();
    let productArray = res.meals
    // console.log(res);
    showDate(productArray);
}

function showDate(productArray) {

// console.log(productArray)
// console.log(typeof(productArray))

    // document.querySelector('.productWrapper').innerHTML = "";

    productArray.forEach(function(item, index) {

        productItem = document.createElement('div')
        productItem.id = index;
        // productItem.class = 'p'+index;
        productItem.setAttribute('class', 'product'+index)

        productImg = document.createElement("img");
        productImg.src = item.strMealThumb

        productName = document.createElement("p");
        productName.innerHTML = item.strMeal

        addCart = document.createElement("button")
        addCart.innerHTML = "Add to Cart";
        addCart.id = index;
        // addCart.onclick = add2Cart(this.id);
        addCart.setAttribute('onclick',' add2cart(this.id)')

        productPrice = document.createElement("a");

        // productPrice.textContent = +(randomPrice());
//     productPrice = Math.floor(Math.random(5) *5* 100);

        productPrice.innerHTML = Math.floor(Math.random(5) *5* 100);
        // productPrice.innerHTML = randomPrice();
        productPrice.id = 'productPrice';


     productItem.append(productImg,productName,addCart, productPrice)
    document.querySelector('.productWrapper').append(productItem);
    })

}

// function randomPrice() {

//     productPrice = Math.floor(Math.random(5) *5* 100);

//    if(productPrice<100){randomPrice()}
//    else{
//     //    console.log(productPrice)

//        return ;
//    }
// }

function add2cart(id) {

   productWrapper =document.querySelector('.productWrapper');
    add1plate = document.querySelector('#plate');
    add1plate.innerHTML ='';
    div = document.querySelector('.product'+id);

    let cartArray = JSON.parse(localStorage.getItem('cart')) || []
    let obj = {}
    obj.name = div.children[1].innerHTML
    obj.price = div.children[3].innerHTML

    obj.image = div.children[0].src;

    cartArray.push(obj);

    localStorage.setItem('cart', JSON.stringify(cartArray));
    add1plate.innerHTML =cartArray.length;
}