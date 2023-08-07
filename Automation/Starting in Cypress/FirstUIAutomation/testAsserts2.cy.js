describe('Trying some Assertions', function(){
    var a = 1;
    //Test case assert true
    it('Test case assert true', function () {
        expect(1==2, 'The values compared should be equal and it arent').to.equal(true);
    })
    //Test case substraction is Ok
    it('Test case substraction is Ok', function () {
        expect(1-5,'Here we expected a 0: ').to.equal(0);
    })
})