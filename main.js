//1 task
function printHelloWorld() {
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
}

//2 task
function perimeter(n1, n2) {
    return (n1+n2)*2;
}

//3 task
function circleArea(rad) {
    return 3.14*rad*rad;
}

//4 task
function greeting(name) {
    return "Hi, "+name+"!";
}

//5 task
function ratio(n1, n2) {
    return n1/n2;
}

//6 task
function sumOfSquares(n1, n2) {
    return (n1*n1)+(n2*n2);
}

//7 task
function productThreeNums(n1, n2, n3) {
    return n1*n2*n3;
}

//8 task
function dollarToTenge(usd) {
    return 446*usd;
}

//9 task
function posOrNeg(n) {
    if (n>=0) {
        console.log("positive");
    } else {
        console.log("negative");
    }
}

//10 task
function areEqual(n1, n2) {
    if (n1==n2) {
        console.log(n1+" is equal to "+n2);
    } else {
        console.log(n1+" is not equal to "+n2);
    }
}

//11 task
function evenOrOdd(n) {
    if (n%2==0) {
        console.log(n+" is even");
    } else {
        console.log(n+" is odd");
    }
}

//12 task
function isBetween(n) {
    if (n>=0 && n<=1) {
        console.log(n+" is between 0 and 1");
    } else {
        console.log(n+" is not between 0 and 1");
    }
}

//13 task
function greatestOfTwo(n1, n2) {
    if (n1>=n2) {
        console.log(n1+" is greater than "+n2);
    } else {
        console.log(n1+" is less than "+n2);
    }
}

//14 task
function greatestOfThree(n1, n2, n3) {
    if (n1>=n2 && n2>=n3) {
        console.log(n1+" is greatest");
    } else if(n2>=n1 && n2>=n3) {
        console.log(n2+" is greatest");
    } else if (n3>=n1 && n3>=n2) {
        console.log(n3+" is greatest");
    }
}

//15 task
function dayOfTheWeek(n) {
    if (n==1) {
        console.log("Monday");
    } else if (n==2) {
        console.log("Tuesday");
    } else if (n==3) {
        console.log("Wednesday");
    } else if (n==4) {
        console.log("Thursday");
    } else if (n==5) {
        console.log("Friday");
    } else if (n==6) {
        console.log("Saturday");
    } else if (n==7) {
        console.log("Sunday");
    } else {
        console.log("Number should be between 1 and 7");
    }
}