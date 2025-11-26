// 1. let: 재할당 가능
let age = 25;
console.log('초기 나이:', age);
age = 26;
console.log('변경 후 나이:', age);

// 2. const: 재할당 불가, 객체/배열 내부 변경 가능
const name = '김철수';
console.log('이름:', name);

// 객체/배열
const person = { name: '철수' };
console.log('초기 person:', person);
person.name = '영희'; // 내부 값 변경 가능
person.age = 25;
console.log('변경 후 person:', person);

const arr = [1, 2, 3];
arr.push(4);
console.log('배열:', arr);

// 3. var vs let 스코프
if (true) {
  var x = 10; // 함수 스코프
  let y = 20; // 블록 스코프
}
console.log('var x:', x); // 10
// console.log("let y:", y); // ReferenceError

// 4. 호이스팅 예제
console.log('var 호이스팅 전:', a); // undefined
var a = 5;

// console.log("let 호이스팅 전:", b); // ReferenceError
let b = 10;
