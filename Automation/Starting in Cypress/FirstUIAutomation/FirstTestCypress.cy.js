
describe('FirstTest', function() {
    
    var a = 2;
    var b = 2;

    it('Addition of two numbers in right way', function () {
        expect(a == b).to.equal(true, 'Its a nice Addition');
    })

    it('Subtraction of two numerbs in right way', function (){
        expect(a != b).to.equal(false, 'Its a nice Subtraction')
    })

})