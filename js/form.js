
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    //Extraindo informações do paciente do form
    var paciente = obtempacientedoformulario(form);

    //cria a tr e a td do paciente
    var pacientetr = montatr(paciente);

    form.reset();

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr);


})

function obtempacientedoformulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)

    }
    return paciente;

}

function montatr(paciente) {
    var pacientetr = document.createElement("tr")

    pacientetr.appendChild(montatd(paciente.nome, "info-nome"));
    pacientetr.appendChild(montatd(paciente.peso, "info-peso"));
    pacientetr.appendChild(montatd(paciente.altura, "info-altura"));
    pacientetr.appendChild(montatd(paciente.gordura, "info-gordura"));
    pacientetr.appendChild(montatd(paciente.imc, "info-imc"));

    return pacientetr;

}

function montatd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;

}