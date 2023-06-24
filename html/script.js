let loanAmount = document.getElementById("amount");
let interestRate=document.getElementById("interest");
let loanDuration =document.getElementById("loanTenure");
let submit =document.getElementById("calculater");

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    calculateEMI();
})

function calculateEMI(){
    //first calculate total number of months in loan tenure if selected year
    let isYear = document.getElementById("year").Checked;
    let isMonth = document.getElementById("month").checked;
    let noOfMonth=0;
    if(isYear=="" && isMonth==""){
        alert("Please select loan tenure type-> Month or year");
    }else{
        if(isYear==true){
            noOfMonth=loneDuration.value * 12 ;
        }else{
            noOfMonths=loanDuration.value;
        }
        let r = parseFloat(interestRate.value)/12/100;
        let p = loanAmount.value;
        let n = noOfMonth;
        // formula EMI=(p * r*(l+r)^n) / ((l+r)^n-1)
        let EMI = (p*r*Math.pow((l+r),n)) / (Math.pow((l+r),n)-1);
        let totalInterest = (EMI * n)-p;
        let totalpayment = totalInterest + parseFloat(p);
        document.getElementById("emi").innerText="fa fa-inr" + Math.round(EMI);
        document.getElementById("totalInterest").innerText="fa fa-inr" + Math.round(totalInterest);
        document.getElementById("totalPayment").innerText="fa fa-inr" + Math.round(totalPayment);
    }
}