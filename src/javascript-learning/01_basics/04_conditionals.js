// 1. if / else 기본 구조

let age = 19;

if (age >= 18) {
  console.log('성인입니다.');
} else {
  console.log('미성년자입니다');
}

// 2. else if — 여러 조건 처리

let score = 77;

if (score >= 90) {
  console.log('A 학점');
} else if (score >= 80) {
  console.log('B 학점');
} else if (score >= 70) {
  console.log('C 학점');
} else {
  console.log('D 학점');
}

// 3. 중첩 if (Nested If)

const user = {
  isLoggedIn: true,
  isAdmin: false,
};

if (user.isLoggedIn) {
  if (user.isAdmin) {
    console.log('관리자 페이지에 접근합니다.');
  } else {
    console.log('일반 사용자 페이지에 접근합니다.');
  }
} else {
  console.log('로그인이 필요합니다.');
}

// 4. switch 문 — 값 기반 분기

const day = 4;

switch (day) {
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  default:
    console.log('주말 또는 잘못된 값');
}

// 5. 조건부 연산자 (삼항 연산자)
let isDarkMode = false;
const theme = isDarkMode ? '다크 모드' : '라이트 모드';
console.log(theme);

// 6. 논리 연산자를 활용한 조건 처리 (&&, ||)

let temp = 27;
let isRaining = false;

// AND
if (temp > 30 && temp < 40) {
  console.log('덥습니다.');
}

// OR
if (temp > 28 || isRaining) {
  console.log('야외 활동 주의!');
}

// 7. Truthy / Falsy 체크 --- JS의 조건문에서는 값 자체의 진리값도 중요

let username = ''; // 빈 문자열 → falsy

if (!username) {
  console.log('사용자 이름이 필요합니다.');
}

// truthy example
let data = 'Hello';

if (data) {
  console.log('데이터가 존재합니다.');
}
