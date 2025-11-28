// 1. 기본적인 클로저 구조

// outer 함수는 count 변수를 갖고 있으며,
// inner 함수를 반환한다.
// inner 함수는 outer 함수의 변수(count)에 접근할 수 있다.
function outer() {
  let count = 0; // 외부 함수의 지역 변수 (inner가 기억할 값)

  function inner() {
    // inner는 outer가 끝난 후에도 count를 "기억"한다.
    count++;
    console.log('count:', count);
  }

  // inner 함수를 반환하여 외부에서 사용 가능하게 한다.
  return inner;
}

// outer()는 실행이 끝났지만
// counter는 여전히 count 변수에 접근할 수 있다 → 클로저 발생!
const counter = outer();

counter(); // count: 1
counter(); // count: 2
counter(); // count: 3

// 2. 데이터 은닉 (private 변수처럼 사용)

// 함수 내부에 값을 숨기고,
// getter / setter 역할을 하는 함수를 반환해 외부에서 조작하도록 하는 패턴
function createUser(name) {
  let score = 0; // 외부에서 직접 접근할 수 없는 숨겨진 변수

  return {
    // 이름 반환
    getName: () => name,

    // 현재 점수 반환
    getScore: () => score,

    // 점수 증가
    increase: () => score++,
  };
}

// createUser("Tom") 호출 시 createUser는 종료되지만,
// 내부의 score, name은 반환된 함수들이 기억하고 있음 → 클로저!
const user = createUser('Tom');

user.increase(); // score = 1
user.increase(); // score = 2

console.log('User:', user.getName(), 'Score:', user.getScore()); // Tom 2

// 하지만 외부에서는 score에 직접 접근할 수 없다.
console.log(user.score); // undefined

// 3. 클로저 + 반복문 문제 (var 사용 시 발생하는 문제)

// var는 함수 스코프이기 때문에,
// for문이 끝나고 setTimeout이 실행될 시점에는 i == 4가 되어 있음.
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log('var:', i), 300);
}
// 출력 결과 → 4 4 4

// 4. 클로저로 반복문 문제 해결하기 (IIFE 활용)

// 즉시 실행 함수(IIFE)를 이용하면
// 각 반복마다 x라는 새로운 변수가 생성된다.
// 이 x가 클로저로 묶여 setTimeout 안에서 기억됨!
for (var i = 1; i <= 3; i++) {
  (function (x) {
    // x는 각각 1, 2, 3인 독립적인 값
    setTimeout(() => console.log('closure:', x), 300);
  })(i);
}

// 출력 결과 → 1 2 3
// (원하는 결과!)
