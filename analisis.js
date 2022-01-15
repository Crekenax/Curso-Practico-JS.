//Helpers
function esPar(numero){
    return (numero % 2 === 0)
}

function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de medianas
function MedianaSalarios (listaOrdenada){
    const mitad = parseInt(listaOrdenada.length / 2)
    if(esPar(listaOrdenada.length)){
        const personaMitad1 = listaOrdenada[mitad];
        const personaMitad2 = listaOrdenada[mitad - 1];
        const mediana = CalcularMediaAritmetica([personaMitad1,personaMitad2])
        return mediana
    }else{
        const personaMitad = listaOrdenada[mitad];
        return personaMitad;
    }

};


//Mediana General
const salariosCol = colombia.map(
    function (persona) {
        return persona.salary;
    }

);

const salariosColSorted = salariosCol.sort(
    function (salaryA,salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = MedianaSalarios(salariosColSorted);

//Mediana Top 10%
const spliceStart = (salariosColSorted.length * 90) /100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(spliceStart,spliceCount); 

medianaTop10Col = MedianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col
});
