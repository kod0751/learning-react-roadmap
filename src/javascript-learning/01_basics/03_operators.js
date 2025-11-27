// 1. 산술 연산자
let a = 10;
let b = 3;

console.log('더하기:', a + b);
console.log('빼기:', a - b);
console.log('곱하기:', a * b);
console.log('나누기:', a / b);
console.log('나머지:', a % b);
console.log('제곱:', a ** b);

// 2. 문자열 연결

let first = 'Hello';
let second = 'World';
console.log('문자열 연결:', first + ' ' + second);

// 3. 비교 연산자
console.log('==  비교:', 5 == '5'); // true (값만 비교)
console.log('=== 비교:', 5 === '5'); // false (값 + 타입 비교)
console.log('!= :', 5 != '5');
console.log('!== :', 5 !== '5');

console.log('크다 :', 10 > 5);
console.log('작다 :', 10 < 5);
console.log('크거나 같다:', 10 >= 10);

// 4. 논리 연산자
let x = true;
let y = false;

console.log('AND (&&):', x && y); // false
console.log('OR  (||):', x || y); // true
console.log('NOT (!):', !x); // false

// 5. 할당 연산자
let n = 5;
n += 2; // n = n + 2
console.log('+=:', n);
n *= 3; // n = n * 3
console.log('*=:', n);

// 6. 삼항 연산자
let score = 85;
let result = score >= 90 ? 'A등급' : 'B등급 이하';
console.log('삼항 연산자:', result);

// 7. 타입 변환 연산
console.log("+'5' →", +'5'); // 5 (숫자) + 단항 연산자(unary plus)는 문자열을 숫자로 변환하려고 시도
console.log("5 + '5' →", 5 + '5'); // "55" (문자열) 둘 중 하나라도 문자열이면 문자열 결합으로 동작

// 8. 단축 평가
console.log("true || '값':", true || '값'); // true 반환
console.log("false || '값':", false || '값'); // '값' 반환
console.log("true && '값':", true && '값'); // '값' 반환
console.log("false && '값':", false && '값'); // false
