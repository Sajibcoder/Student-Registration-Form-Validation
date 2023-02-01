const form = document.getElementById('form');
const name = document.getElementById('name');
const fname = document.getElementById('fname');
const address = document.getElementById('address');
const email = document.getElementById('email');
const number = document.getElementById('number');
const dob = document.getElementById('dob');
const course = document.getElementById('course');

function showError(input, message){
    const formList = input.parentElement;
    formList.className= 'form-list error'; 
}

function showSuccess(input, message){
    const formList = input.parentElement;
    formList.className= 'form-list success'; 
}

function cheakRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() ===''){
            showError(input, `${input.id} is required`);
        }
        else{
            showSuccess(input);
        }
    })

}




form.addEventListener('submit', function(e){
e.preventDefault();


cheakRequired([name,fname,address,email,number,dob]);

})




