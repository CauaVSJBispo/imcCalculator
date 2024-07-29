document.getElementById('formulario').addEventListener('submit', (e) => {e.preventDefault()}) // cancela o envio do formulário ao clicar em enviar --> isso impede que a página seja recarregada

document.getElementById('apagar').addEventListener('click', () => {
    document.getElementById('resultado').style.backgroundColor = 'black';
    document.getElementById('texto').innerHTML = ''
})

function calculaImc (peso, altura){
  return (peso/(altura**2)).toFixed(2)
} // Recebe os parâmetros "peso" e "altura", retornando o resultado da fórmula para calcular o IMC

function tipoImc(imc){
    const classificacoesImc = ['obesidade grau III', 'obesidade grau II', 'obesidade grau I', 'acima do peso', 'peso normal', 'abaixo do peso', 'muito abaixo do peso']

    if(imc > 40){
        resposta = classificacoesImc[0]
        return resposta
    }

    if (40<=imc || imc>=35) {
        resposta = classificacoesImc[1]
        return resposta
    }
    if (34.9<=imc || imc>= 30) {
        resposta = classificacoesImc[2]
        return resposta
    }
    if (29.9<=imc || imc>=25) {
        resposta = classificacoesImc[3]
        return resposta
    }
    if (24.9<=imc || imc>=18.5) {
        resposta = classificacoesImc[4]
        return resposta
    }
    if (imc<16.9) {
        resposta = classificacoesImc[6]
        return resposta
    }
} //recebe o parâmetro imc, advindo da função calculaImc() e retorna o tipo em que se enquadra.


function validaDados(nome, altura, peso){
    if (!nome) {
        document.getElementById('som-erro').play()
        const resultado = document.getElementById('resultado')
        resultado.classList.add('erro')
        setTimeout(()=>{
            resultado.classList.remove('erro')
        }, 1700)
        resultado.style.backgroundColor = '#f32424';
        texto.innerHTML = `digite um NOME válido`
        return
    }
    if (!altura) {
        document.getElementById('som-erro').play()
        const resultado = document.getElementById('resultado')
        resultado.classList.add('erro')
        setTimeout(()=>{
            resultado.classList.remove('erro')
        }, 1500)
        resultado.style.backgroundColor = '#f32424';
        texto.innerHTML = `digite uma ALTURA válida`
        return
    }
    if (!peso) {
        document.getElementById('som-erro').play()
        const resultado = document.getElementById('resultado')
        resultado.classList.add('erro')
        setTimeout(()=>{
            resultado.classList.remove('erro')
        }, 1500)
        resultado.style.backgroundColor = '#f32424';
        texto.innerHTML = `digite um PESO válido`
        return
    }
} //recebe e valida os dados dos inputs

document.getElementById('enviar').addEventListener('click', () => {
    const texto = document.getElementById('texto')
    const nome = document.getElementById('nome').value;
    const altura = Number(document.getElementById('altura').value);
    const peso = Number(document.getElementById('peso').value);

    validaDados(nome, altura, peso)

    if(nome && altura && peso){
    const imc = calculaImc(peso, altura);
    const textoImc = tipoImc(imc);
    document.getElementById('resultado').style.backgroundColor = 'black';

    texto.innerHTML = `Muito obrigado por utilizar nosso site, ${nome}! <br> <br> <strong>Seu IMC é ${imc} <br> (${textoImc})</strong>`
    return
    }

}) // recebe os dados e ativa as demais funções


