
function totalCost() {
    const cpl = document.getElementsById('cpl').value;
    const nlp = document.getElementsById('nlp').value;
    const tc = cpl * nlp;
    document.getElementsById('tc').innerText = 'Total Cost: $${tc.toFixed(2)}';
}

document.getElementsById('calculate').addEventListener('click',CalculateTheTotalCost);