let calcular = document.getElementById('calcular')

function imc(){
    let nome = document.getElementById('nome').value
    let altura = document.getElementById('altura').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')

    if (nome !== '' && altura !== '' && peso !== ''){

        let resu = (peso / (altura*altura))
        
        if(resu >= 18.5 && resu <= 25){
            valor = 'Peso normal'
          }else if(resu < 18.5){
            valor = 'Abaixo do peso'
          }else if(resu >=25 && resu <=30){
            valor = 'Acima do peso'
          }else{
            valor = 'Obeso'
          }

          resultado.textContent = `Olá, ${nome} Seu IMC é ${resu.toFixed(2)} e você está ${valor}`
    }
    else{
        resultado.textContent = 'Preencha todos os campos'
    }
}
