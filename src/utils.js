// src/utils.js

export function calculateEMI(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const numPayments = years * 12;
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)
    ).toFixed(2);
  }
  
  export function generateAmortizationSchedule(principal, annualRate, years) {
    const monthlyRate = annualRate / 12 / 100;
    const emi = parseFloat(calculateEMI(principal, annualRate, years));
    const schedule = [];
    let balance = principal;
  
    for (let i = 1; i <= years * 12; i++) {
      const interest = balance * monthlyRate;
      const principalPaid = emi - interest;
      balance -= principalPaid;
  
      schedule.push({
        month: i,
        principal: principalPaid.toFixed(2),
        interest: interest.toFixed(2),
        balance: balance > 0 ? balance.toFixed(2) : '0.00',
      });
    }
  
    return schedule;
  }
  