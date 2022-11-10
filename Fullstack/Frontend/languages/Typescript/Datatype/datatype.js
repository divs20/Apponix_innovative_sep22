var myNum = 12;
console.log(myNum);
var myNum1 = new Number(10);
console.log(myNum1);
var myName = 'hi';
console.log(myName);
var mobile = /** @class */ (function () {
    function mobile() {
        this.speaker = true;
        this.camera = 2;
    }
    return mobile;
}());
var val1 = new mobile();
console.log(val1);
