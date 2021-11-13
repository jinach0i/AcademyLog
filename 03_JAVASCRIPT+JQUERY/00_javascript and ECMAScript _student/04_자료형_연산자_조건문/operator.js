//1. numberic operators(숫자연산자)
console.log(1+1);//add
console.log(6-2);//substract
console.log(2/2);//divide
console.log(5*3);//multply
console.log(3%2);//remainder
console.log(2**3)//exponentiation

//2. string concatenation(문자결합)
console.log('학교종이'+'땡땡땡');
const a="어서 모이자";
const b="선생님이";
const c="우리를 기다리신다";
console.log(a+b+c)

//3. Assignment operatiors(대입연산)
let x=3;
let y=2;

x=y;
console.log(x)
x += y;
console.log(x)
x -= y;
console.log(x)
x*=y;
console.log(x)
x/=y;
console.log(x)

let str="<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";

document.write(str);

//4. increment and decrement operatiors(증감연산자)
let counter=5;

console.log(counter++);
console.log(counter)
console.log(--counter)
console.log(counter--)
console.log(counter)

//5.Comparison operators(비교연산)

console.log(10<5);
console.log(10<=6)
console.log(10>6)
console.log(10>=6)
console.log(10=="10")
console.log(10==="10")

//6.Logical operators : ||(or) &&(and) !(not)
const value1=false;
const value2=4<2;
console.log(`or:${value1 || value2 || check()}`);
function check(){
    for(let i=0; i<10; i++){
        console.log("hello");
    }
    return false;
}
console.log(`and:${value1 && value2 && check()}`);
console.log(!value1);

//7.Equality(같다)
const stringFive="5";
const numberFive=5;
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

const hyun1={name:'hyun'}
const hyun2={name:'hyun'}
const hyun3=hyun1;

console.log(hyun1==hyun2);
console.log(hyun1===hyun2);
console.log(hyun2==hyun3);
console.log(hyun1==hyun3);

console.log(0==false);
console.log(0===false);
console.log(' '===false);


//8. Ternary operators ?간단하게 출력할떄 사용(삼항조건연산자)
const g=10;
const h=3;

let result=g<h ?  "javascript":"hello";
console.log(result)

//---------------------------
const userHeight=161;
const userWeight=55;
let normal_w=(userHeight-100)*0.9;
console.log(normal_w)

