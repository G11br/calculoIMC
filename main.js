const btn = document.querySelector('#button').addEventListener('click', calcular)

function calcular(){
    //Selecionar o objeto(input) guardar em uma varialvel, e acessar apenas a propriedade com valor(value)
    let altura = Number(document.querySelector('#altura').value)
    let peso = Number(document.querySelector('#peso').value)
    //Selecionar o objeto(input radio) guardar em uma variavel, e acessar apenas a propriedade com informacao se está selecionado ou não(checked) retornando true para selecionado e false para nao selecionado
    let masculino = document.querySelector('#masculino').checked
    let feminino =  document.querySelector('#feminino').checked
    var imc = peso/(altura * altura)
    //Selecionar objeto da resposta
    let resposta = document.querySelector('.resposta')

    if(masculino == true){
        if(imc <= 2){
            resposta.innerHTML = `Observe se os dados foram preenchidos corretamente`
        }else if (imc > 2 && imc <= 18.5){
            resposta.innerHTML = `Abaixo do Peso (${imc.toFixed(2)})`
        } else if(imc <= 24.9){
            resposta.innerHTML = 'Peso Ideal'
        } else if(imc <= 29.9){
            resposta.innerHTML = `Levemente acima do Peso (${imc.toFixed(2)})`
        }else if(imc <= 34.9){
            resposta.innerHTML = `Obesidade grau I (${imc.toFixed(2)})`
        }else if(imc <= 39.9){
            resposta.innerHTML = `Obesidade grau II (${imc.toFixed(2)})`
        }else if(imc >= 40){
            resposta.innerHTML = `Obesidade grau III (${imc.toFixed(2)})`
        }
    }else if(feminino == true){
        if(imc <= 2){
            resposta.innerHTML = `Observe se os dados foram preenchidos corretamente`
        }else if (imc > 2 && imc <= 18.5){
            resposta.innerHTML = `Abaixo do Peso (${imc.toFixed(2)})`
        } else if(imc <= 24.9){
            resposta.innerHTML = `Peso Ideal (${imc.toFixed(2)})`
        } else if(imc <= 29.9){
            resposta.innerHTML = `Levemente acima do Peso (${imc.toFixed(2)})`
        }else if(imc <= 34.9){
            resposta.innerHTML = `Obesidade grau I (${imc.toFixed(2)})`
        }else if(imc <= 39.9){
            resposta.innerHTML = `Obesidade grau II (${imc.toFixed(2)})`
        }else if(imc >= 40){
            resposta.innerHTML = `Obesidade grau III (${imc.toFixed(2)})`
        }
    }else{
        resposta.innerHTML = `Selecione o sexo`
    }
}