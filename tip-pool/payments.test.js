describe('payment.js set up and test', function () {
    // createCurPayment
    beforeEach(() => {
        billAmtInput.value = 200;
        tipAmtInput.value = 30;
    })

    it('should return an object with billAmt, tipAmt, tipPercent as keys', function () {
        expect(createCurPayment()).toBeInstanceOf(Object);
        expect(Object.keys(createCurPayment()).length).toEqual(3);
    })

//submitPaymentInfo
    it('should create a new key/value pair in allPayments object', () => {
        submitPaymentInfo(null);
        expect(paymentId).toEqual(1);
        expect(Object.keys(allPayments).length).toEqual(1);
    })
    it('appendPaymentTable should create a new row', () => {
        appendPaymentTable(createCurPayment());
        let testTableBody = document.querySelectorAll('#paymentTable tbody tr td');
        expect(testTableBody[0].textContent).toEqual('$200');
        expect(testTableBody[1].textContent).toEqual('$30');
        expect(testTableBody[2].textContent).toEqual('15%');
    })
    it('updateSummary should create new table data in Shift Summary section', () =>  {
        createCurPayment();
        submitPaymentInfo();
        updateSummary();
        expect(summaryTds[0].textContent).toEqual('$200');
        expect(summaryTds[1].textContent).toEqual('$30');
        expect(summaryTds[2].textContent).toEqual('15%');
    })

    //cleaning up values used for testing
afterEach(() => {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentId = 0;
    allPayments = {};
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentTbody.innerHTML = '';

})
})

