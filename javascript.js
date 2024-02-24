const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#password-confirmation')


form.addEventListener('submit',(event) =>{
    event.preventDefault();

    checkForm();

})



email.addEventListener("blur",(event) =>{
    checkInputEmail();
})



username.addEventListener("blur",(event) =>{
    checkInputUsername();
})

password.addEventListener("blur",(event) =>{
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur",(event) =>{
    checkInputPasswordConfirmation();
})




function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "Prencha um username!")
    }else{
        const formItem =username .parentElement;
        formItem.className = "form-content"
    }
}

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === ""){
        errorInput(email, "O email é obrigatorio")
    }else{
        const formItem = email .parentElement;
        formItem.className = "form-content"
    }
}


function checkInputPassword(){
    const passwordValue = password.value;
    

    if(passwordValue === ""){
        errorInput(password,"A senha é obrigatoria.")
    }else if (passwordValue.length < 8){
        errorInput(password, "A senha precisa ter no minimo 8 caracteres.")
    }else{
        const formItem =password.parentElement;
        formItem.className =" form-content"
    }
}


function checkInputPasswordConfirmation(){
    const passwordValue = password.value;
    const confirmationPasswordValue = passwordConfirmation.value;

   if(confirmationPasswordValue === ""){
    errorInput(passwordConfirmation,"A confirmacao de senha é obrigatoria")
   }else if(confirmationPasswordValue !== passwordValue){
    errorInput(passwordConfirmation,"As senhas nao sao iguais.")
   }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-content"
   }
}


function checkForm(){
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll('.form-content')

    const isValid = [...formItems].every((item)=>{
        return item.className === "form-content"
    }) ;

    if(isValid){
        alert("cadastrado com sucesso!")
    }


}


function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}