
function checkout(e){

// e.preventDefault();

console.log('done');

setTimeout(accepted, 3000);
setTimeout(cook, 8000);
setTimeout(ready, 10000);
setTimeout(out, 12000);
setTimeout(dilivered, 1000);


}


function accepted() {
alert('Your order is accepted')    
}
function cook() {
alert('Your order is being cooked')    
}
function ready() {
alert('Your order is ready')    
}
function out() {
alert('Order out for delivery ')    
}
function dilivered() {
alert('Ordered Delivered')    
}
