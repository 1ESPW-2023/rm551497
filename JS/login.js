
const inputUser = document.querySelector("input[type='text']");
// posso usar qualquer um, "input[name='txtNm']", até o textholder

//fazendo eventos: focus, keyup, min 5 letras....


inputUser.addEventListener("focus", ()=>{
    //qdo clica na caixa, ganha foco vermelho
    inputUser.setAttribute("style","outline-color:#ff0000;")
});

inputUser.addEventListener("keyup", ()=>{
    //qdo clica na caixa, keyup
    inputUser.setAttribute("style","outline-color:#ff0000;")
  
});

inputUser.addEventListener("keyup", ()=>{
    //pega a qdde de caracteres que esta sendo escrito
    console.log(inputUser.value.length);
});

inputUser.addEventListener("keyup", ()=>{
    //vermelho menos de 5 letras, torna verde qdo for mais de 5 letras
    if(inputUser.value.length < 5){
        inputUser.setAttribute("style","outline-color:#ff0000;")
    }else{
        inputUser.setAttribute("style","outline-color:#00ff00;")
    }
});

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