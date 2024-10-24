function criarCartao(categoria, pergunta, resposta){
    console.log(categoria, pergunta, resposta);
}

function criarCartao(categoria, pergunta, resposta){
    let container= document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className =  'cartao'
    cartao.innerHTML = `<div class="cartao__conteudo">
    <h3>${categoria}>
    <div class="cartao__conteudo__pergunta">
        <p>${pertgunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
    <p>${resposta}
     </p>
     </div>
     </div>`
        container.appendChild(cartao)

}
  
let respostaEstavisivel = false
container.appendChild(cartao)

function viraCartao () {
                                      respostaEstavisivel = !respostaEstavisivel
         cartao.classlis.toogle('active',
            respostaEstavisivel)                             
}

cartao.addeventlistener('click', viracartao)