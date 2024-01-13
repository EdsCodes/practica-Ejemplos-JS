
var numeroA = parseInt(prompt("Ingresa el numero de inicio para calcular sus numeros pares"));
var numeroB = parseInt(prompt("Ingresa el numero de fin (debe ser mayor al anterior)"));
var contadorPares = 0;

if (numeroA > numeroB || numeroA === numeroB || isNaN(numeroA) || isNaN(numeroB)){
    alert("Por favor ingresa de nuevo los numeros, el primero debe ser menor al segundo.");
} else {
    for (var i = numeroA; i <= numeroB; i++){
        if (i % 2 === 0) {
            contadorPares++
        } 
    }
};
alert("Entre el numero " + numeroA + " y el numero " + numeroB + " hay " + contadorPares + " numeros pares.");