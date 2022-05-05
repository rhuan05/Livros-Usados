let titulos = document.querySelectorAll('.titulo');
let precos = document.querySelectorAll('.precoLivro');
let modeloLivro = document.querySelector('.fileira--livros--sobre');

livrosJson.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('.fileira--livros').appendChild(novoLivro);
    document.querySelector('.titulo').innerHTML = livrosJson[i].name;
    document.querySelector('.precoLivro').innerHTML = livrosJson[i].price;
    document.querySelector('.imgLivro').src = livrosJson[i].img;
});

let btnsWpp = document.querySelectorAll('.btnWpp');

document.addEventListener('click', (e) => {
    let elementoClick = e.target;

    if(elementoClick.className == 'btnWpp'){
        let sobreElementos = elementoClick.parentNode;
        let mainEscolhido = document.getElementById('main--escolhido');
        mainEscolhido.style.display = 'block';
        mainEscolhido.style.top = `${window.scrollY + 50}px`
        document.getElementById('titulo--escolhido').innerHTML = sobreElementos.children[1].innerHTML;
        document.getElementById('preco--escolhido').innerHTML = sobreElementos.children[3].innerHTML;
        document.getElementById('imagem--escolhido').src = sobreElementos.children[0].src;
        
    }
});

document.getElementById('iconX').addEventListener('click', () => {
    document.getElementById('main--escolhido').style.display = 'none';
});