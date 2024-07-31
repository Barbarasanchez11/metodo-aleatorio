
let metodos = [
    "filter", "map", "forEach", "flat",
    "find", "indexOf", "includes", "split",
    "join", "reduce", "reverse", "slice", "shift", "unshift"
];

document.getElementById("generarEjercicio").addEventListener("click", () => {
    
    let longitud = metodos.length;
    
     
        let metodoAleatorio = metodos[Math.floor(Math.random() * longitud)];


    document.getElementById("result").innerHTML = `<p>Ejercicio generado: ${metodoAleatorio}</p>`;
});
