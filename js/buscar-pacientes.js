var botaoAdicionar = document.querySelector("#buscar-pacientes");
botaoAdicionar.addEventListener("click", function () {


    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

    if (xhr.status == 200) {
      
            var resposta = (xhr.responseText); //result

            var pacientes = JSON.parse(resposta);

            pacientes.forEach(paciente => {
                obtemPacienteNaTabela(paciente);

            });
        
    } else {
       alert("Erro ao carregar pacientes");
        erroAjax.classList.remove("invisivel");
        // console.log(xhr.status);
        // console.log(xhr.responseText);
    }

});
    xhr.send();



});