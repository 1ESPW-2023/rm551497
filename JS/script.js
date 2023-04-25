//Exemplo de funções

//pra pegar a tabela do html
//const divElement = document.getElementById("div-box")

        //atrelar um evento

            //divElement.addEventListener("click", ()=>{
            //    //aqui executar algo
            //    console.log(divElement);
            //    });

//ou

//divElement.addEventListener("click", mostraElemento);
//function name(params) {
//    function mostraElemento() {
//    console.log(divElement)
//}

//function soma() {
//    let n1 = 10
//    let n2 = 5
//    console.log(n1 + n2)
//}

//soma() - chamei no head do html 


// //Recuperando elementos do HTML com querySelector
// const liElements = document.querySelector("#item");
// console.log(liElements);


// //Recuperando elementos do HTML com querySelectorAll
// const liElements = document.querySelectorAll("li");
// //CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...liElements];
// console.log(arrayElements);

//CONVERTENDO NODE LIST EM ARRAY COM SPREAD
// const arrayElements = [...document.querySelectorAll("li")];

// arrayElements.map((el,key)=>{

//     if (el.textContent.indexOf("1") != (-1)) {
//         el.textContent = `[ ${el.textContent} ]`;
//     }
// });
let tmp = 0;


function mudaCor() {
    let r = Math.ceil(Math.random()*255);
    let g = Math.ceil(Math.random()*255);
    let b = Math.ceil(Math.random()*255);
    
    const elemento = [...document.getElementsByClassName("conteudo")];
    elemento.forEach( (el)=>{
        el.style.backgroundColor = `rgb(${r},${g},${b})`;
    } )

   tmp = setTimeout(mudaCor, 1000);

}

function alteraBanner() {
    
    let nr = Math.round(Math.random() *3); // numero aleatorio entre 0 e 3, pq tenho 3 imagens
    const img1 = document.querySelector(".l-d > img"); // usar o seletor de imagem >img , nao preciso colocar um id lá na imagem
//queryselectorAll - retorna uma collection
    img1.src = `./img/banner-lateral-${nr}.png`;

}

alteraBanner();
 
 //aqui é a função do botão lampada no conteudo

 function turnInOff() {

    const imgLampada = document.querySelector(".conteudo img");
    const btnOnOff = document.querySelector(".conteudo button");

    if(btnOnOff.textContent == "LIGAR"){
        btnOnOff.textContent = "DESLIGAR";
        imgLampada.src = "./img/pic_bulbon.gif";
    }else{
        btnOnOff.textContent = "LIGAR";
        imgLampada.src = "./img/pic_bulboff.gif";
    }
}

//facilitando o codigo de cima e deixando mais limpo:

const btnOnOff = document.querySelector(".conteudo button");

btnOnOff.addEventListener("click", ()=>{
    const imgLampada = document.querySelector(".conteudo img");
    if(btnOnOff.textContent == "LIGAR"){
        btnOnOff.textContent = "DESLIGAR";
        imgLampada.src = "./img/pic_bulbon.gif";
    }else{
        btnOnOff.textContent = "LIGAR";
        imgLampada.src = "./img/pic_bulboff.gif";
    }
});