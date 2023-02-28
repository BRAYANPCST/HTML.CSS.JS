function CalcularPromedio(){

let nota1=parseInt(prompt ("Ingrese su Nota "))


if (nota1>=3 && nota1 <=5){
    document.write("Felicidades aprobaste")
}
else if(nota1<=2.9 && nota1>=0){
    document.write("has reprobado")
}
else{
    alert("ingresaste un valor no valido")
}
}