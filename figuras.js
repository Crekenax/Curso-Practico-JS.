//Codigo del cuadrado:
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado ** 2;
}
areaCuadrado();

console.groupEnd();

//Codigo del triangulo:
console.group("Triangulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const alturaTriangulo = 5.5;

// console.log("Los lados del triangulo miden: " 
//     + ladoTriangulo1 
//     + "cm " 
//     + ladoTriangulo2 
//     + "cm " 
//     + baseTriangulo 
//     + "cm"
// );

// console.log("La altura de triangulo es: " + alturaTriangulo);

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
};

//console.log("El perimetro del triangulo es de: " + perimetroTriangulo + "cm");


function areaTriangulo(base,altura){
    return (base * altura) /2;
}
// console.log("El Area del triangulo es de: " + areaTriangulo + "cm²");






console.groupEnd();

//Codigos del circulo:
console.group("Circulo");

 //Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es de: " + radioCirculo + "cm");
//Diametro
function diametroCirculo(radio){
    return radio * 2;
}
// console.log("El diametro del circulo es de: " + diametroCirculo + "cm");
//PI
const PI = Math.PI
console.log("Pi es: " + PI);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}


// console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");
//Area
function areaCirculo(radio){
    return (radio**2) * PI;
}
// console.log("El Area del circulo es de: " + areaCirculo + "cm²");
console.groupEnd();


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);

}



//Ejercicio: Triangulo Iseceles:

function validarTrianguloIsoceles(lado1,lado2,lado3){
    isoceles = false
    if (lado1 == lado2){
        isoceles = true
    }else if (lado2 == lado3){
        isoceles = true
    }else if (lado1 == lado3){
        isoceles = true
    }
    return isoceles
}

function calcularPerimetroTrianguloIsoceles(){
    lado1 = parseInt(document.getElementById("InputTrianguloIsoceles1").value)
    lado2 = parseInt(document.getElementById("InputTrianguloIsoceles2").value)
    lado3 = parseInt(document.getElementById("InputTrianguloIsoceles3").value)
    alert(perimetroTrianguloIsoceles(lado1,lado2,lado3))
}

function calcularAreaTrianguloIsoceles(){
    lado1 = parseInt(document.getElementById("InputTrianguloIsoceles1").value)
    lado2 = parseInt(document.getElementById("InputTrianguloIsoceles2").value)
    lado3 = parseInt(document.getElementById("InputTrianguloIsoceles3").value)
    alert(areaTrianguloIsoceles(lado1,lado2,lado3))
}


function perimetroTrianguloIsoceles(lado1,lado2,lado3){
    if(validarTrianguloIsoceles(lado1,lado2,lado3)){
        return lado1+lado2+lado3
    }else{
        console.log("No es isoceles");
    }
}

function areaTrianguloIsoceles(lado1,lado2,lado3){
    if(validarTrianguloIsoceles(lado1,lado2,lado3)){
        altura = alturaTrianguloIsoceles(lado1,lado2,lado3)
        base = calcularBaseTrianguloIsoceles(lado1,lado2,lado3)
        console.log("Altura triangulo isoceles: " + altura + "cm" );
        return (base * altura) /2
        
    }else{
        console.log("No es isoceles");
    }
}



//Altura y base:
function alturaTrianguloIsoceles(lado1,lado2,lado3){
    base = calcularBaseTrianguloIsoceles(lado1,lado2,lado3)
    return Math.sqrt( (lado1**2) - (base**2/4)  )

}

function calcularBaseTrianguloIsoceles(lado1,lado2,lado3){
    if (lado1 == lado2){
        base = lado3
    }else if (lado1 == lado3){
        base = lado2
    }else{
        base = lado3
    }
    console.log("base calculada: " +base);
    return base
}