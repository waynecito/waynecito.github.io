function nombreFuncion(parametro1,parametro2){

}



function multiplicar(num1,num2){
return num1*num2;
}


var resultado = multiplicar(5,9);{
console.log ("el resultado de la multiplicacion es:" +resultado);}

function saludar(nombre){
console.log("hola" +nombre+ "!");
}
saludar("luis sierra");{

}
 
function areacirculo(radio){
    var area = Math.PI * (radio*radio);
    return area;
}

var areaCircle = areacirculo(5);
console.log = (areaCircle);
alert(areaCircle);

function esPar(numero){
    if(numero%2 == 0){
        return true;
    }
    else{
        return false;
    }
}
var numero = 50;
if(esPar (numero)){
    alert ("el numero es par");
} else{
    alert("el numero es inpar");
}

function determinarSigno(numero2){
    if(numero>0){
        return "el numero es positivo";
    } else if(numero2<0){
        return "el numero es negativo";
    } else{
        return "el numero es 0"
    }
}

var numero2 = -7;
var resultado2 = determinarSigno (numero2)
console.log(resultado2);


