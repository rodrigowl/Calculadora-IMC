
const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso') // qual elemento foi clicado na pagina
    const inputAltura = e.target.querySelector('.altura') // qual elemento foi clicado na pagina

    const peso = Number(inputPeso.value); // 
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso Invalido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura Invalido', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);

});

function getImc(peso, altura) { // calculando IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function getNivelImc(imc) {
    const nivel = ['abaixo do peso', "Peso Normal", "Sobre Peso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

    if (imc > 39.9){
        return nivel[5]
    }
     if (imc >= 34.9) {
        return nivel[4]            
    }
     if (imc >= 29.9) {
        return nivel[3]           
    }
     if (imc >= 24.9) {
        return nivel[2]            
    }
     if (imc >= 18.5) {
        return nivel[1]             
    }
    if (imc < 18.5) {
        return nivel[0]             
    }
}

function criaP() { // funcao apra criar tipo de páragrafo / usar para cada resutlado
    const p = document.createElement('p'); //criadno paragrafo
    return p;
}

function setResultado(msg, isValid) { //recebe a mensagem e se esse resultado e valido
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ''; // limpando o html

    

    const p = criaP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); 
    } else {
        p.classList.add('bad'); 
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}

