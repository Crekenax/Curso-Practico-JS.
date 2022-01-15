const notas = [
    {
        course: "Matematicas",
        note: 16,
        credit: 5
    },
    {
        course: "Educacion Fisica",
        note: 15,
        credit: 2
    },
    {
        course: "Geometria",
        note: 12,
        credit: 3
    },
    {
        course: "Quimica",
        note: 9,
        credit: 5
    },

];


function CalcularPonderado(lista) {

    const notesWhitCredit = lista.map(function(elemento) {
        return elemento.note * elemento.credit;
    });
    
    const sumNotesWhitCredit = notesWhitCredit.reduce(
        function (valorAcumulado = 0,nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    );
    
    const credits = lista.map(function(elemento) {
        return elemento.credit
    });
    
    const sumCredits = credits.reduce(
        function (valorAcumulado = 0,nuevoValor) {
            return valorAcumulado + nuevoValor
        }
    );
    
    const promPonderado = sumNotesWhitCredit/sumCredits
    return promPonderado
}