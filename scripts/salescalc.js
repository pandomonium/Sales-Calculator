// This prorgam will calculate sales using function CalculateSales
addEventListener("load", main)

// This function contains an EventListener
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}
// This function will calculate the Sales.
function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}

