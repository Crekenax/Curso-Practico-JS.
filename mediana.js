function CalcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    let promedioLista = sumaLista / lista.length;
    return promedioLista;
}


function esPar(numero){
    if (numero % 2 === 0){
        return true
    }else{
        return false
    }
}


function OrdenarLista(lista){
    function comparar (a,b){return a-b}
    return lista.sort(comparar)
}

function CalcularMediana(lista){
    
    const listaOrdenada = OrdenarLista(lista)
    
    const mitadLista = parseInt(listaOrdenada.length / 2);

    let mediana

   if (esPar(listaOrdenada.length)){
       const elemento1 = listaOrdenada[mitadLista];
       const elemento2 = listaOrdenada[mitadLista - 1];
   
       const promedioElemento1y2 = CalcularMediaAritmetica([elemento1,elemento2])
       mediana = promedioElemento1y2
   }else{
       mediana = listaOrdenada[mitadLista];
   }

   return mediana
}