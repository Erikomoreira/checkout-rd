let inputcpf = document.getElementById("cpf");
let inputcpfTitular = document.getElementById("cpfTitular");
let inputccv = document.getElementById("ccv");
let inputcartao = document.getElementById("numeroCartao");
let senha = document.getElementById("senha");
let csenha = document.getElementById("csenha");
let cep = document.getElementById("cep");
let endereco = document.getElementById("endereco");
let complemento = document.getElementById("complemento")
let bairro = document.getElementById("bairro");
let selectEstado = document.getElementById("estUsuario");





inputcpf.addEventListener('keyup', (e) => {

    if (isNaN(inputcpf.value)) {

        inputcpf.value = inputcpf.value.substring(0, (inputcpf.value.length - 1));

    }

    if (inputcpf.value.length >= 11) {

        inputcpf.value = inputcpf.value.substring(0, 11);

    }


});


cep.addEventListener('keyup', (e) => {

    if (isNaN(cep.value)) {

        cep.value = cep.value.substring(0, (cep.value.length - 1));

    }

    if (cep.value.length >= 8) {

        cep.value = cep.value.substring(0, 8);

        buscarCep(cep);

    }


});


inputcpfTitular.addEventListener('keyup', (e) => {

    if (isNaN(inputcpfTitular.value)) {

        inputcpfTitular.value = inputcpfTitular.value.substring(0, (inputcpfTitular.value.length - 1));

    }

    if (inputcpfTitular.value.length >= 11) {

        inputcpfTitular.value = inputcpfTitular.value.substring(0, 11);

    }


});


inputccv.addEventListener('keyup', (e) => {

    if (isNaN(inputccv.value)) {

        inputccv.value = inputccv.value.substring(0, (inputccv.value.length - 1));

    }

    if (inputccv.value.length >= 3) {

        inputccv.value = inputccv.value.substring(0, 3);

    }


});


inputcartao.addEventListener('keyup', (e) => {

    if (isNaN(inputcartao.value)) {

        inputcartao.value = inputcartao.value.substring(0, (inputcartao.value.length - 1));

    }

    if (inputcartao.value.length >= 16) {

        inputcartao.value = inputcartao.value.substring(0, 16);

    }


});


csenha.addEventListener('blur', (e) => {

    console.log(senha);
    console.log(csenha);

    if (senha.value != csenha.value) {

        csenha.style.cl = "red";
        csenha.setAttribute('class', 'form-control is-invalid');

    } else {

        csenha.setAttribute('class', 'form-control is-valid');

    }

});


 function buscarCep(cep){


    let resposta = fetch('https://viacep.com.br/ws/' + cep.value +'/json/')
        .then((resposta) => {
            return resposta.json()
        })
        .then((dados) => {

           console.log(dados);

           if(!dados.erro){

            mostrarNaTela(dados);

            cep.setAttribute('class', 'form-control is-valid');

           }else{

            cep.setAttribute('class', 'form-control is-invalid');
           }

          
        });
 }

 function mostrarNaTela(buscaCep) {
     
    endereco.value = buscaCep.logradouro;
    complemento.value = buscaCep.complemento;
    bairro.value = buscaCep.bairro;

    console.log(selectEstado.value);
    console.log(buscarCep.uf);
    selectEstado.value = buscarCep.uf;

}