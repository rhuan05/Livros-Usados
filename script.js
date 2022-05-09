let titulos = document.querySelectorAll('.titulo');
let precos = document.querySelectorAll('.precoLivro');
let modeloLivro = document.querySelector('.fileira--livros--sobre');
let imgBanner = document.getElementById('imgBanner');

if (window.screen.width <= 375){
    imgBanner.src = '/images/imgBanner320px.png';
} else if (window.screen.width <= 425){
    imgBanner.src = '/images/imgBanner425px.png';
} else {
    imgBanner.src = '/images/banner.png';
}

maisPopulares.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#mais-populares .fileira--livros').appendChild(novoLivro);
    document.querySelector('.titulo').innerHTML = maisPopulares[i].name;
    document.querySelector('.precoLivro').innerHTML = maisPopulares[i].price;
    document.querySelector('.imgLivro').src = maisPopulares[i].img;
});

talvezGoste.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#talvez-goste .fileira--livros').appendChild(novoLivro);
    document.querySelector('.titulo').innerHTML = talvezGoste[i].name;
    document.querySelector('.precoLivro').innerHTML = talvezGoste[i].price;
    document.querySelector('.imgLivro').src = talvezGoste[i].img;
});

outros.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#outros .fileira--livros').appendChild(novoLivro);
    document.querySelector('.titulo').innerHTML = outros[i].name;
    document.querySelector('.precoLivro').innerHTML = outros[i].price;
    document.querySelector('.imgLivro').src = outros[i].img;
});

let btnsWpp = document.querySelectorAll('.btnWpp');

document.addEventListener('click', (e) => {
    let elementoClick = e.target;

    if(elementoClick.className == 'btnWpp'){
        let sobreElementos = elementoClick.parentNode;
        let mainEscolhido = document.getElementById('main--escolhido');
        mainEscolhido.style.display = 'block';
        mainEscolhido.style.top = `${window.scrollY}px`
        document.getElementById('titulo--escolhido').innerHTML = sobreElementos.children[1].innerHTML;
        document.getElementById('preco--escolhido').innerHTML = sobreElementos.children[3].innerHTML;
        document.getElementById('imagem--escolhido').src = sobreElementos.children[0].src;
        
    }
});

document.getElementById('iconX').addEventListener('click', () => {
    document.getElementById('main--escolhido').style.display = 'none';
});