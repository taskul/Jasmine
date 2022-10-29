const testLoan = {
  amount:30000,
  years:6,
  rate:1.2
}


it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment(testLoan)).toEqual('432.05')
});


it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment(testLoan).split('.')[1].length).toBe(2)
});

/// etc
