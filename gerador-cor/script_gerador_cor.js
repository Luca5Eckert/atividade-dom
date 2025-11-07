
const googleFonts = [
    'Roboto', 'Oswald', 'Montserrat', 'Playfair Display', 'Pacifico',
    'Lato', 'Poppins', 'Merriweather', 'Open Sans', 'Raleway',
    'Dancing Script', 'Indie Flower', 'Bebas Neue', 'Josefin Sans', 'Comfortaa'
];

function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function selecionarFonteAleatoria() {
    const indice = Math.floor(Math.random() * googleFonts.length);
    return googleFonts[indice];
}

function alterarCorDeFundo() {
    document.body.style.backgroundColor = gerarCorAleatoria();
}

function alterarCorTitulo() {
    const titulo = document.getElementById('titulo');
    titulo.style.color = gerarCorAleatoria();
}

function alterarCorParagrafo() {
    const paragrafo = document.getElementById('paragrafo');
    paragrafo.style.color = gerarCorAleatoria();
}

function alterarFonteTitulo() {
    const titulo = document.getElementById('titulo');
    const novaFonte = selecionarFonteAleatoria();
    titulo.style.fontFamily = `'${novaFonte}', sans-serif`; 
}

function alterarFonteParagrafo() {
    const paragrafo = document.getElementById('paragrafo');
    const novaFonte = selecionarFonteAleatoria();
    paragrafo.style.fontFamily = `'${novaFonte}', sans-serif`;
}

function alterarTudo() {
    alterarCorDeFundo();
    alterarCorTitulo();
    alterarCorParagrafo();
    alterarFonteTitulo();
    alterarFonteParagrafo();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btnFundo').addEventListener('click', alterarCorDeFundo);
    document.getElementById('btnCorTitulo').addEventListener('click', alterarCorTitulo);
    document.getElementById('btnCorParagrafo').addEventListener('click', alterarCorParagrafo);
    document.getElementById('btnFonteTitulo').addEventListener('click', alterarFonteTitulo);
    document.getElementById('btnFonteParagrafo').addEventListener('click', alterarFonteParagrafo);
    document.getElementById('btnTudo').addEventListener('click', alterarTudo);
});