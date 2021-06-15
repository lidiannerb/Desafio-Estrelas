const imagem1 = document.querySelector('.img1');
const imagem2 = document.querySelector('.img2');
const imagem3 = document.querySelector('.img3');
const imagem4 = document.querySelector('.img4');
const nome1 = document.querySelector('.nome1');
const nome2 = document.querySelector('.nome2');
const nome3 = document.querySelector('.nome3');
const nome4 = document.querySelector('.nome4');
const reload = document.querySelector('#content');


personagemAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

gerarPersonagem1 = () => {
    let personagem = personagemAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${personagem}`, { 
        method:'GET',  
        headers: { 
            Accept: 'application/json', 
            "Content-type": 'application/json' 
        } 
    }).then ((response) => response.json()).then((data) => { 
        imagem1.src = data.image;
        nome1.innerHTML = data.name;
    });
}

gerarPersonagem2 = () => {
    let personagem = personagemAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${personagem}`, { 
        method:'GET',  
        headers: { 
            Accept: 'application/json', 
            "Content-type": 'application/json' 
        } 
    }).then ((response) => response.json()).then((data) => { 
        imagem2.src = data.image;
        nome2.innerHTML = data.name;
    });
}

gerarPersonagem3 = () => {
    let personagem = personagemAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${personagem}`, { 
        method:'GET',  
        headers: { 
            Accept: 'application/json', 
            "Content-type": 'application/json' 
        } 
    }).then ((response) => response.json()).then((data) => { 
        imagem3.src = data.image;
        nome3.innerHTML = data.name;
    });
}

gerarPersonagem4 = () => {
    let personagem = personagemAleatorio();
    return fetch (`https://rickandmortyapi.com/api/character/${personagem}`, { 
        method:'GET',  
        headers: { 
            Accept: 'application/json', 
            "Content-type": 'application/json' 
        } 
    }).then ((response) => response.json()).then((data) => { 
        imagem4.src = data.image;
        nome4.innerHTML = data.name;
    });
}

atualizar = () => {
    gerarPersonagem1();
    gerarPersonagem2();
    gerarPersonagem3();
    gerarPersonagem4();
}

reload = atualizar();