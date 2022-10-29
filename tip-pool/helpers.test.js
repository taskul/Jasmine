describe('helper.js test', () => {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    })

    it('Should return total payment from all tips.', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
    });

    it('calculateTipPercent should return correct percentage', function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        expect(calculateTipPercent(billAmtInput.value, tipAmtInput.value)).toEqual(10);
    })
    it('checks if a new row is created with table data', () => {
        let testRow = document.createElement('tr');
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        appendTd(testRow, '$' + billAmtInput.value);
        appendTd(testRow, '$' + tipAmtInput.value);
        appendTd(testRow, calculateTipPercent(billAmtInput.value, tipAmtInput.value) + '%');
        paymentTbody.append(testRow);
        let allTestTds = document.querySelectorAll('#paymentTable tbody tr td')
        expect(allTestTds[0].textContent).toEqual('$100');
        expect(allTestTds[1].textContent).toEqual('$10');
        expect(allTestTds[2].textContent).toEqual('10%');
    });


    afterEach(function () {
        allPayments = [];
        paymentId = 0
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
    });
})


