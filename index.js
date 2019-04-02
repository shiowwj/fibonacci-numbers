// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stroke();


var fibSeq = function(n, returnList){
    var order = n - 2;
    var startOne = 1;
    var startTwo = 1;
    var numFinal;
    var listNumbers = [1,1];

    for(i = 0; i< order; i++){
        numFinal = startOne + startTwo;
        startOne = startTwo;
        startTwo = numFinal;
        listNumbers.push(numFinal);
    }

    // return numFinal;
    console.log(listNumbers);
}

var fibseqRecurve = function(n){
    if(n == 1|| n ==2){
        return 1
    };

    return fibseqRecurve(n-2) + fibseqRecurve(n-1);

}

var fib;
var n = 10;
fibseqFurther = fibseqRecurve(n);

console.log(fibseqFurther);

var main = function(number,returnList){


    if(number < 3){
    switch(number) {
        case "0":
        console.log('Please enter a higher number.');
        break;

        case "1":
        console.log('Fibonacci number is 1.');
        break;

        case '2':
        console.log('Fibonacci number is 1.');
        break;
    }}

    else{
        fibSeq(number,returnList);
    }
}

main(process.argv[2],process.argv[3]);