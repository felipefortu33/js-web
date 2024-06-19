var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = obtempacientedoformulario(form);
    var pacientetr = montatr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    var erro = validaPaciente(paciente);

    var msgErro = document.querySelector("#msg-erro");
    msgErro.innerHTML = ""; // Limpa mensagens de erro anteriores

    if (erro.length != 0) {
        erro.forEach(function(erro) {
            var li = document.createElement("li");
            li.textContent = erro;
            msgErro.appendChild(li);
        });
        return;
    }

    tabela.appendChild(pacientetr);
    form.reset(); // Reseta o formulário apenas se não houver erros
});

function obtempacientedoformulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaimc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function montatr(paciente) {
    var pacientetr = document.createElement("tr");

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

function validaPaciente(paciente) {
    var erro = [];
    if (paciente.nome == "" || paciente.nome == null) {
        erro.push("Nome não pode ser vazio!");
    }
    if (paciente.peso == "" || paciente.peso == null) {
        erro.push("Peso não pode ser vazio!");
    } else if (paciente.peso <= 0 || paciente.peso > 600) {
        erro.push("Peso deve ser maior que 0 e menor ou igual a 600 kg!");
    }
    if (paciente.altura == "" || paciente.altura == null) {
        erro.push("Altura não pode ser vazia!");
    } else if (paciente.altura <= 0 || paciente.altura > 3) {
        erro.push("Altura deve ser maior que 0 e menor ou igual a 3 metros!");
    }
    if (paciente.gordura == "" || paciente.gordura == null) {
        erro.push("Gordura não pode ser vazia!");
    } else if (paciente.gordura <= 0 || paciente.gordura > 70) {
        erro.push("Gordura deve ser maior que 0 e menor ou igual a 70%!");
    }

    return erro;
}

function calculaimc(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

function obtemPacienteNaTabela(paciente) {
    var pacientetr = montatr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacientetr);
    
}