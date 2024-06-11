//alert("Hello World!")
console.log("Olá Mundo")
var titulo = document.querySelector("h1");
titulo.textContent = "Aparecida Nutricionista"

var title = document.querySelector("title");
title.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente"); //tr


pacientes.forEach(paciente => {
    var tdpeso = paciente.querySelector(".info-peso"); //td da tr
    var peso = tdpeso.textContent; //valor td

    var tdaltura = paciente.querySelector(".info-altura"); //td da tr
    var altura = tdaltura.textContent; // valor td

    var imc = peso / (Math.pow(altura, 2));

    var tdimc = paciente.querySelector(".info-imc");
    
    tdimc.textContent = imc.toFixed(2);
});
    








