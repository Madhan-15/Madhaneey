

/*function calculator() {
    const PA = Number(document.getElementById("pa"));
    const MC = Number(document.getElementById("mc"));
    const AIR = Number(document.getElementById("air"));
    const NM = Number(document.getElementById("nm"));


    const amt = (AIR / 12) / 100;

    let maturityAmount = PA;
    for (let i = 1; i <= NM; i++) {
        maturityAmount += maturityAmount * amt;
        maturityAmount += MC;
    }
    document.getElementsByClassName("op")[0].innerHTML = `${maturityAmount.toFixed(2)} INR`;



}*/


function calculateRD() {
    const principalAmount = parseFloat(document.getElementById("principalAmount").value);
    const monthlyContribution = parseFloat(document.getElementById("monthlyContribution").value);
    const annualInterestRate = parseFloat(document.getElementById("annualInterestRate").value);
    const numberOfMonths = parseInt(document.getElementById("numberOfMonths").value);

    const monthlyInterestRate = (annualInterestRate / 12) / 100;

    let maturityAmount = principalAmount;
    for (let i = 1; i <= numberOfMonths; i++) {
        maturityAmount += maturityAmount * monthlyInterestRate;
        maturityAmount += monthlyContribution;

        document.getElementsByClassName("op")[0].innerHTML = `${maturityAmount.toFixed(2)} INR`;
    }



}

