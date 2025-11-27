// 1. 기본 함수 선언
function sayHello() {
  console.log('Hello!');
}

sayHello();

// 2. 매개변수 & 인수 --- 파라미터(parameter): 함수 정의 부분의 변수
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice');
greet('Bob');

// 3. 반환값 사용하기 --- return을 만나면 함수는 종료되고 값이 반환됨
function add(a, b) {
  return a + b;
}

const sum = add(5, 7);
console.log('sum:', sum);

// 4. 기본값 매개변수 --- 전달하지 않으면 기본값을 사용
function introduce(name = 'Unknown', age = 0) {
  console.log(`Name: ${name}, Age: ${age}`);
}

introduce();
introduce('Mike', 29);

// 5. 함수 표현식 --- 함수를 변수에 할당하는 방식
const multiply = function (x, y) {
  return x * y;
};

console.log('multiply:', multiply(3, 4));

// 6. 함수는 값이다 (일급 객체) --- 함수는 변수에 저장 가능 --- 함수의 인자로 전달 가능 --- 함수에서 반환도 가능
function printMessage(message) {
  console.log('Message:', message);
}

const printer = printMessage;
printer('This is a message!');
