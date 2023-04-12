//Exemplo de funções

//pra pegar a tabela do html
const divElement = document.getElementById("div-box")

        //atrelar um evento

            //divElement.addEventListener("click", ()=>{
            //    //aqui executar algo
            //    console.log(divElement);
            //    });

//ou

divElement.addEventListener("click", mostraElemento);
//function name(params) {
    function mostraElemento() {
    console.log(divElement)
}

function soma() {
    let n1 = 10
    let n2 = 5
    console.log(n1 + n2)
}

//soma() - chamei no head do html 