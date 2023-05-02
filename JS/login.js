
const inputUser = document.querySelector("input[type='text']");
// posso usar qualquer um, "input[name='txtNm']", até o textholder

//fazendo eventos: focus, keyup, min 5 letras....


inputUser.addEventListener("focus", ()=>{
    //qdo clica na caixa, ganha foco vermelho
    inputUser.setAttribute("style","outline-color:#ff0000;")
});


//qdo clica na caixa, keyup:
//inputUser.addEventListener("keyup", ()=>{
//    inputUser.setAttribute("style","outline-color:#ff0000;")
  
//});


//pega a qdde de caracteres que esta sendo escrito
//inputUser.addEventListener("keyup", ()=>{
//    console.log(inputUser.value.length);
//});


//vermelho menos de 5 letras, torna verde qdo for mais de 5 letras
//inputUser.addEventListener("keyup", ()=>{
//    if(inputUser.value.length < 5){
//        inputUser.setAttribute("style","outline-color:#ff0000;")
//    }else{
//        inputUser.setAttribute("style","outline-color:#00ff00;")
//    }
//});

inputUser.addEventListener("keyup", ()=>{
    //validação mais completinho
    const labelUser = document.querySelector("label[for='idNm']");

    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;")
        labelUser.setAttribute("style","color:#ff0000;")

    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;")
    }
});

//SUBINDO A RÉGUA
//Agora repita o processo e altere a classe do ícone para outra
//Fazendo com que o olho se feche ou apareça com uma cancela quando clicado e vice-versa.

const eyePass = document.querySelector(".eye");

eyePass.addEventListener("click", ()=>{
    const inputPass = document.querySelector("#idPass");

    if(inputPass.getAttribute("type") == "password"){
        inputPass.setAttribute("type","text");
        eyePass.setAttribute("class","fa fa-eye eye");
    }else{
        inputPass.setAttribute("type","password");
        eyePass.setAttribute("class","fa fa-eye-slash eye");
    }

});