// ============================================
// 1. async 함수 기본
// ============================================
// async 키워드를 붙이면 자동으로 Promise를 반환하는 함수가 된다.

async function hello() {
  return '안녕하세요!'; // 자동으로 Promise.resolve("안녕하세요!") 반환
}

hello().then((msg) => console.log('async 기본:', msg));

// ============================================
// 2. await 기본
// ============================================
// await은 Promise가 처리될 때까지 기다리고 그 결과를 반환한다.

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitExample() {
  console.log('3초 기다리는 중...');
  await wait(3000); // 여기서 3초 멈춤
  console.log('완료!');
}

waitExample();

// ============================================
// 3. try / catch 로 에러 처리
// ============================================
// async 함수 내부에서는 .catch 대신 try/catch로 에러를 다룬다.

function fetchData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject('데이터 불러오기 실패!');
      else resolve('데이터 불러오기 성공!');
    }, 1000);
  });
}

async function getData() {
  try {
    const result = await fetchData(false); // 실패 여부 true/false 변경해보세요
    console.log('결과:', result);
  } catch (error) {
    console.log('에러 발생:', error);
  } finally {
    console.log('finally: 항상 실행');
  }
}

getData();

// ============================================
// 4. async/await + Promise 체이닝 대체
// ============================================
// then으로 이어가던 코드가 훨씬 직관적으로 변신한다.

function addOne(n) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(n + 1), 500);
  });
}

async function addSequence() {
  let x = await addOne(1); // 2
  console.log('1차:', x);

  x = await addOne(x); // 3
  console.log('2차:', x);

  x = await addOne(x); // 4
  console.log('최종:', x);
}

addSequence();

// ============================================
// 5. 병렬 처리: Promise.all + async/await
// ============================================
// await을 연속으로 쓰면 직렬(하나씩 순서대로) 실행됨.
// 동시에 실행하고 싶으면 Promise.all을 함께 사용!

function job(name, ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${name} 완료`), ms);
  });
}

async function parallelExample() {
  console.log('병렬 작업 시작');

  const results = await Promise.all([
    job('A 작업', 1000),
    job('B 작업', 1500),
    job('C 작업', 500),
  ]);

  console.log('병렬 결과:', results);
}

parallelExample();

// ============================================
// 6. async 함수에서 값 반환하기
// ============================================
// async 함수는 항상 Promise를 반환한다.

async function returnValue() {
  return 123; // Promise.resolve(123)
}

returnValue().then((v) => console.log('async 반환값:', v));

// ============================================
// 7. async는 화살표 함수에서도 사용 가능
// ============================================

const getUser = async () => {
  return { name: '홍길동', age: 20 };
};

getUser().then((u) => console.log('async 화살표 함수:', u));
