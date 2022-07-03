function changeMode(){
    changeClasses();
    changeText();
}
function changeClasses(){
    body.classList.toggle('modoescuro');
}

function changeText(){
    if(body.classList.contains('modoescuro')){
        button.innerHTML = "TEMA CLARO";
        h1.innerHTML = "CLIQUE E TROQUE PARA TEMA CLARO";
        return;
    }
    button.innerHTML = "TEMA ESCURO";
    h1.innerHTML = "CLIQUE E TROQUE PARA TEMA ESCURO";
    
}

const button = document.getElementById('selecionar-modo');
const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];



button.addEventListener('click', changeMode)