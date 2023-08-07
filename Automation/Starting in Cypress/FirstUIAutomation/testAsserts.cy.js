
describe('Trying some Assertions', function(){
    var a = 1;
    //Test case assert true
    it('Test case assert true', function () {
        expect(1==1).to.equal(true);
    })
    //Test case assert false
    it('Test case assert false', function () {
        expect(2==1).to.equal(false);
    })
    //Test case substraction is Ok
    it('Test case substraction is Ok', function () {
        expect(1-1).to.equal(0);
    })
    //Test case substraction is not Ok
    it('Test case substraction is not Ok', function () {
        expect(1-1).to.not.equal(1);
    })
    //Test case should be true
    it('Test case should be true', function () {
        expect(2==2).to.be.equal(true);
    })
     //Test case should be false
    it('Test case should be false', function () {
        expect(2==1).to.be.equal(false);
    })
    //Test case validate if a variable exists
     it('Test case validate if a variable exists', function () {
        expect(a).to.exist;
    })
    //Test case variable is minor to 10
    it('Test case variable is minor to 10', function () {
        expect(a).to.lessThan(10);
    })
    //Test case number is greater to 10
    it('Test case variable is greater to 10', function () {
        expect(25).to.greaterThan(10);
    })
})