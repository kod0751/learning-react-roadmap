// 1. 기본 원시 타입(Primitive)
let str = 'Hello'; // 문자열
let num = 42; // 숫자
let bool = true; // 불리언
let und; // undefined
let nll = null; // null
let sym = Symbol('id'); // 심볼

console.log('string:', str, typeof str);
console.log('number:', num, typeof num);
console.log('boolean:', bool, typeof bool);
console.log('undefined:', und, typeof und);
console.log('null:', nll, typeof nll); // typeof null은 'object'로 나오는 JS 특이점
console.log('symbol:', sym, typeof sym);

// 2. 참조 타입(Reference)
let obj = { name: '철수', age: 25 }; // 객체
let arr = [1, 2, 3]; // 배열
let func = function () {
  // 함수
  console.log('함수 호출');
};

console.log('object:', obj, typeof obj);
console.log('array:', arr, typeof arr); // 배열도 object
console.log('function:', func, typeof func);

// 3. 타입 확인 및 변환
let a = '123';
let b = Number(a); // 문자열 → 숫자
console.log('형 변환:', b, typeof b);

let c = 42;
let d = String(c); // 숫자 → 문자열
console.log('형 변환:', d, typeof d);
