function OnClickButtonBorrowingCalculate(){
    const income = document.getElementById("InputIncome").value;
    const expenses = document.getElementById("InputExpenses").value;
    
    function calculateBorrowing40(income, expenses) {
        return (income - expenses) * 0.40
    };
    
    function calculateBorrowing35(income, expenses) {
        return (income - expenses) * 0.35
    };
    
    const borrowing40 = calculateBorrowing40(income, expenses).toFixed(2);
    const borrowing35 = calculateBorrowing35(income, expenses).toFixed(2);
    
    result = document.getElementById("Result");
    result.innerText = "La capacidad de endeudamiento es de entre: $" + borrowing35 + " y $" + borrowing40 + " al mes";
    
}
