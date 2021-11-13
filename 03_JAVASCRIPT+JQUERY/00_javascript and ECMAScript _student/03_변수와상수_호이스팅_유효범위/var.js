'use strict';

//ES5 - var (variable) -변경되는 값 rw(read/write)
//ES6 - let

/*  let names='hyun';
 names='hello';
 console.log(names); */

 //Block scope 이란 {}안에 변수 넣으면 블럭안에서만 볼수 있음

let globalName='global name';//전역변수

 {
     let names='hyunroom';
     console.log(globalName);
     
 }

//현 개발에서 var를 사용하지 않는 이유
// var호이스팅이 일어남/ 어디에 선언했는지 상관없이 맨 상단으로 끌어올려 주는 행위를 함
//대부분은 프로그램 언어에서는 변수를 선언하고 그 값을 할당하는 것이 정상적임
//자바스크립트 var에서는 선어도 하기 전에 값을 할당하고 심지어 값을 할당하기 전에 출력도 할 수 있음
//값이 정의 되지 않으면 undefined가 나오는데 변수는 정의 되어있지만 값이 할당되지 않았을때 나타남

//const - r(read only) 읽기만 가능 한번 할당하면 변하지 않는 값을 

const daysInWeek=7;
const maxNumber=5;

//왠만하면 값이 할당된후 변경되지 않을 값을 사용
//보완상 다른 해커가 값을 변경하는 것을 막을수 있음
//실수도 방지 할수 있음

//let -Mutable(변경)
//const -Imnutable(변경불가)

//variable types
//primitive(더이상 나눠지지 않는 것), string, number, boolean, null
//object(single item들을 묶어서 한 박스로 관리) 메모리를 레퍼런스를 통해서 나타냄

const count=17; //integer 정수
const size=12.3; //decimal number 소숫점(실수)
console.log("value:"+count+ ', type:'+ typeof count);
console.log(`value:${count}, type:${typeof count}`);

//string 문자와 변수를 연결할때 벡틱(`)을 사용함

const char='c';
const jeehyun='jeehyun';
const jojeehyuh='hello'+jeehyun;
console.log(`value: ${jojeehyuh}, type: ${typeof jojeehyuh}`)

//boolean (참, 거짓)
//false: 0, null, '', undefined, NaN
//true: 그외 나머지 값이 들어있는
const canRead=true;
console.log(canRead);
const test=3<1;
console.log(test);
console.log("value:" + canRead + "type :" + typeof canRead);
console.log(`value:${canRead}, type: ${typeof canRead} `);
console.log(`value:${test}, type: ${typeof test} `);

//null
let nothing=null;
console.log(`value:${nothing}, type: ${typeof nothing} `);

//undefined
let x;
console.log(`value:${x}, type: ${typeof x}`);

//symbol
const symbol1=Symbol('id');//우선 순위를 주고 싶을떄 고유한 식별자가 필요할떄 사용
const symbol2=Symbol('id');

console.log(symbol1===symbol2)//false

//똑같이 만들고 싶으면
const qSymbol1=Symbol.for('id');
const qSymbol2=Symbol.for('id');
console.log(qSymbol1===qSymbol2);
//심볼은 바로 출력하면 오류가 나기때문에 문자열로 변환해서 출력해야 오류가 발생하지 않음
console.log(`value:${symbol1.description}, type: ${typeof symbol1}`);

//자바스크립트 변수는 선언할때 데이터타입이 무엇인지 선언하지 않고 프로그램이 동작할때 할당된 값에 따라 타입이 변경 될수 있음

let text='hello';
console.log(`value:${text}, type: ${typeof text} `);
text=3;
console.log(`value:${text}, type: ${typeof text} `);
text='5'+3;
console.log(`value:${text}, type: ${typeof text} `);
text='8'-'2';
console.log(`value:${text}, type: ${typeof text} `);








