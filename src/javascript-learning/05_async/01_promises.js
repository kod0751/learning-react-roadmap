// ==========================================
// 1. Promise 기본 구조
// ==========================================
// Promise는 "비동기 작업을 미래에 완료하겠다"는 약속
// 성공(resolve) 또는 실패(reject)을 전달한다.

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve('성공적으로 완료되었습니다!');
    } else {
      reject('문제가 발생했습니다...');
    }
  }, 1000);
});

// ==========================================
// 2. then, catch, finally
// ==========================================
myPromise
  .then((result) => {
    console.log('then:', result); // 성공 시 실행
  })
  .catch((error) => {
    console.log('catch:', error); // 실패 시 실행
  })
  .finally(() => {
    console.log('finally: 무조건 실행됨');
  });

// ==========================================
// 3. Promise 체이닝 예제
// ==========================================
// then에서 return을 하면 새로운 Promise가 이어진다.

function addNumber(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n + 1);
    }, 500);
  });
}

addNumber(1)
  .then((x) => {
    console.log('1차 결과:', x);
    return addNumber(x); // 2
  })
  .then((x) => {
    console.log('2차 결과:', x);
    return addNumber(x); // 3
  })
  .then((x) => {
    console.log('최종 결과:', x); // 3
  });

// ==========================================
// 4. Promise.all 예제
// ==========================================
// 여러 비동기 작업을 "병렬적으로" 처리하고 모두 완료될 때까지 기다린다.

const p1 = new Promise((resolve) =>
  setTimeout(() => resolve('첫 번째 완료'), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve('두 번째 완료'), 1500)
);

Promise.all([p1, p2]).then((results) => {
  console.log('Promise.all 결과:', results); // ["첫 번째 완료", "두 번째 완료"]
});

// ==========================================
// 5. Promise.race 예제
// ==========================================
// 가장 빨리 끝나는 Promise만 반환된다.

Promise.race([p1, p2]).then((winner) => {
  console.log('Promise.race 결과:', winner);
});

// ==========================================
// 6. 에러가 발생할 수 있는 비동기 코드 예제
// ==========================================

function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject('데이터 가져오기 실패!');
      } else {
        resolve('데이터 가져오기 성공!');
      }
    }, 800);
  });
}

fetchData(false)
  .then((msg) => console.log(msg))
  .catch((err) => console.error('에러:', err));
