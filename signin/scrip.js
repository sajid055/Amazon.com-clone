let button = document.getElementById('button');
let intputSection = document.getElementById('input');

const validation = () =>{
    let intputSection = parseInt(button.innerHTML);
    let error_trw = document.getElementById('error_trw');
    if(validation.value === 'valid') {
        intputSection.innerHTML = button;
        error_trw.innerHTML = "";
    }else{
         error_trw.innerHTML = "Invalid!";
    }
}