const monthlyPaymentDisplay = document.getElementById('monthly-payment');
const demoLoan = {
  amount:10000,
  years:5,
  rate:7.0
}

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  if (Object.values(getCurrentUIValues()).includes(0)) {
    document.getElementById('loan-amount').value = demoLoan.amount;
    document.getElementById('loan-years').value = demoLoan.years;
    document.getElementById('loan-rate').value = demoLoan.rate;
  }
  let monthlyPayment = calculateMonthlyPayment(demoLoan);  
  updateMonthly(monthlyPayment);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  if (Object.values(getCurrentUIValues()).includes(0)) {
    monthlyPaymentDisplay.textContent = 'Please fill in all of the fields'
  } else {
    calculateMonthlyPayment(getCurrentUIValues());
  }
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principleAmount = values.amount;
  let periodicIntrestRate = (values.rate/100)/12;
  let totalNumberOfPayments = values.years * 12;
  let monthlyPayment = principleAmount*periodicIntrestRate/(1-(1+periodicIntrestRate)**-totalNumberOfPayments);
  monthlyPayment = monthlyPayment.toFixed(2); // converts it into a string with two decimal points. 
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
    monthlyPaymentDisplay.textContent = monthly; 
}
