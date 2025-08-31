var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var dicountCode = document.getElementById('discount_code1');
const decreaseNumber = (incdec,itemprice) => {
    var  itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    console.log(itemprice.innerHTML);
    // console.log(itemval1.value);
    if(itemval.value <= 0){
        itemval.value = 0;
        alert('Negtavie quantity not allowed');
    }else{
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 259;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - 259;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
        
    }
}

const increaseNumber = (incdec,itemprice) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(itemval1.value);

    if(itemval.value >= 5){
        itemval.value = 5;
        alert('max 5 allowed');
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    }else{
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 259;
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + 259;
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}

const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(dicountCode.value === 'amazon.com2025') {
        let newtotalamt = totalamtcurr -70;
        total_cart_amt.innerHTML = newtotalamt;
        error_trw.innerHTML = "Hurrey! code is valid.";

    }else{
        error_trw.innerHTML = "Invalid code! Try Again.";
    }
}
