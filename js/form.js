var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacientetr = document.createElement("tr")
    
    var nometd = document.createElement("td");
    var pesotd = document.createElement("td");
    var alturatd = document.createElement("td");
    var gorduratd = document.createElement("td");
    var imctd = document.createElement("td");

    nometd.textContent = nome;
    pesotd.textContent = peso;
    alturatd.textContent = altura;
    gorduratd.textContent = gordura;
    imctd.textContent = (peso / (altura * altura)).toFixed(2);

    pacientetr.appendChild(nometd);
    pacientetr.appendChild(pesotd);
    pacientetr.appendChild(alturatd);
    pacientetr.appendChild(gorduratd);
    pacientetr.appendChild(imctd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr);


    // console.log(nome);
    // console.log(peso);
    // console.log(altura);
    // console.log(gordura);
    
    
    
    
    //console.log("olá, fui clicado! la ele...");
    
})
