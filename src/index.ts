let dato1 = document.getElementById("dato1");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese un número";

btnEnviar.addEventListener("click", () => {
  let numero: number = Number(dato1.value);

  if (numero == 0) {
    rotulo2.innerHTML = "El número es cero";
    console.log("El número es cero");
  } else if (numero % 2 == 0) {
    rotulo2.innerHTML = "El número es par";
    console.log("El número es par");
  } else {
    rotulo2.innerHTML = "El número es impar";
    console.log("El número es impar");
  }
});
