let titulos = document.querySelectorAll('.titulo');
let precos = document.querySelectorAll('.precoLivro');
let modeloLivro = document.querySelector('.fileira--livros--sobre');
let imgBanner = document.getElementById('imgBanner');
let outrosImg;

if (window.screen.width <= 375){
    imgBanner.src = '/assets/site/imgBanner320px.png';
} else if (window.screen.width <= 425){
    imgBanner.src = '/assets/site/imgBanner425px.png';
} else {
    imgBanner.src = '/assets/site/banner.png';
}

maisPopulares.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#mais-populares .fileira--livros').appendChild(novoLivro);
    novoLivro.childNodes[3].innerHTML = maisPopulares[i].name;
    novoLivro.childNodes[7].innerHTML = maisPopulares[i].price;
    novoLivro.childNodes[1].src = maisPopulares[i].img[0];
    novoLivro.childNodes[11].innerHTML += maisPopulares[i].img[1];
});

talvezGoste.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#talvez-goste .fileira--livros').appendChild(novoLivro);
    novoLivro.childNodes[3].innerHTML = talvezGoste[i].name;
    novoLivro.childNodes[7].innerHTML = talvezGoste[i].price;
    novoLivro.childNodes[1].src = talvezGoste[i].img[0];
    novoLivro.childNodes[11].innerHTML += talvezGoste[i].img[1];
});

outros.map((e, i) => {
    let novoLivro = modeloLivro.cloneNode(true);
    document.querySelector('#outros .fileira--livros').appendChild(novoLivro);
    novoLivro.childNodes[3].innerHTML = outros[i].name;
    novoLivro.childNodes[7].innerHTML = outros[i].price;
    novoLivro.childNodes[1].src = outros[i].img[0];
    novoLivro.childNodes[11].innerHTML += outros[i].img[1];
});

let btnsWpp = document.querySelectorAll('.btnWpp');

document.addEventListener('click', (e, i) => {
    let elementoClick = e.target;

    if(elementoClick.className == 'btnWpp'){
        let sobreElementos = elementoClick.parentNode;
        let mainEscolhido = document.getElementById('main--escolhido');
        mainEscolhido.style.display = 'block';
        mainEscolhido.style.top = `${window.scrollY + 50}px`
        document.getElementById('titulo--escolhido').innerHTML = sobreElementos.children[1].innerHTML;
        document.getElementById('preco--escolhido').innerHTML = sobreElementos.children[3].innerHTML;
        document.getElementById('imagem--escolhido').src = sobreElementos.children[0].src;
        document.getElementById('imgsLivros').innerHTML = `<img class="outrosImg" src=${sobreElementos.children[0].src} /><br><img class="outrosImg" src=${sobreElementos.children[5].childNodes[0].innerHTML} />`;
        
        outrosImg = document.querySelectorAll('.outrosImg');
        outrosImg.forEach((e) => {
            e.addEventListener('click', (e) => {
                let imgSrc = e.target;
                document.getElementById('imagem--escolhido').src = imgSrc.src;
            })
        })
    }
});

document.getElementById('iconX').addEventListener('click', () => {
    document.getElementById('main--escolhido').style.display = 'none';
});