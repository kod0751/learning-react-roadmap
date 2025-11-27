//콜백 함수(Callback)란? --- 함수에 인자로 전달되는 함수 --- 특정 시점에 나중에 실행되도록 미뤄둔 함수 --- 자바스크립트가 비동기 처리를 다루는 핵심 원리

// 일반적인 함수 호출
function basic(name) {
  console.log('안녕하세요, ' + name + '님!');
}
basic('철수'); // 즉시 실행

// 1. 콜백 기본 개념
function greet(name, callback) {
  console.log(`Hello, ${name}`);
  callback(); // 전달받은 함수를 나중에 실행
}

function sayBye() {
  console.log('Goodbye!');
}

greet('Alice', sayBye); // sayBye 함수를 콜백으로 전달

// 2. 익명함수를 콜백으로 전달
greet('Bob', () => {
  console.log('See you soon!');
});

// 3. 비동기 콜백 (setTimeout)
console.log('Start');

setTimeout(() => {
  console.log('This runs after 1 second');
}, 1000);

console.log('End');

// 4. 콜백 지옥 예시
setTimeout(() => {
  console.log('Step 1');
  setTimeout(() => {
    console.log('Step 2');
    setTimeout(() => {
      console.log('Step 3');
    }, 500);
  }, 500);
}, 500);

// 음식 주문 시스템
function orderFood(food, successCallback, errorCallback) {
  console.log(food + ' 주문 접수...');

  setTimeout(() => {
    const success = Math.random() > 0.3; // 70% 성공률

    if (success) {
      successCallback(food + '가 준비되었습니다!');
    } else {
      errorCallback('죄송합니다. ' + food + ' 품절입니다.');
    }
  }, 2000);
}

// 사용
orderFood(
  '피자',
  (message) => console.log('✓ ' + message),
  (error) => console.log('✗ ' + error)
);
