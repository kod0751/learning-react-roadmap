// 배열 고급 기능 & 불변 패턴

// 기본 배열
const nums = [10, 20, 30, 40];

// ==========================================
// 1. Spread (...) — 배열 복사 & 병합
// ==========================================

// 얕은 복사 (원본 영향 없음)
const copy = [...nums];
console.log('copy:', copy);
console.log('nums:', nums);

// 병합
const merged = [...nums, 50, 60];
console.log('merged:', merged);

// ==========================================
// 2. concat — 여러 배열 병합
// ==========================================

const a = [1, 2];
const b = [3, 4];
const c = a.concat(b); // [1,2,3,4]
console.log('concat:', c);

// ==========================================
// 3. sort — 정렬 (주의: 원본을 변경함)
// ==========================================

const arr = [5, 3, 10, 1];

// 일반 sort는 문자열 기준 → 숫자 정렬 시 비교 함수 필요
arr.sort((a, b) => a - b); // 오름차순
console.log('sort asc:', arr);

arr.sort((a, b) => b - a); // 내림차순
console.log('sort desc:', arr);

// ==========================================
// 4. reduce — 모든 배열 연산의 왕
// ==========================================

// 합계 구하기
const total = nums.reduce((acc, cur) => acc + cur, 0);
console.log('reduce sum:', total);

// 가장 큰 값 찾기
const maxValue = nums.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity);
console.log('reduce max:', maxValue);

// 객체 집계 예시 (실전 중요!)
const users = [
  { name: 'A', age: 20 },
  { name: 'B', age: 22 },
  { name: 'C', age: 20 },
];

// 나이별 그룹화
const groupByAge = users.reduce((acc, user) => {
  const age = user.age;

  if (!acc[age]) acc[age] = []; // key가 없으면 초기화
  acc[age].push(user);

  return acc;
}, {});

console.log('reduce group:', groupByAge);

// ==========================================
// 5. flat / flatMap
// ==========================================

const nested = [1, [2, [3, 4]]];

// depth=2까지 펼치기
console.log('flat:', nested.flat(2)); // [1,2,3,4]

// flatMap → map 후 flat(1)
const flatMapped = [1, 2, 3].flatMap((n) => [n, n * 2]);
console.log('flatMap:', flatMapped);

// ==========================================
// 6. Set을 이용한 중복 제거
// ==========================================

const dup = [1, 2, 2, 3, 4, 4, 5];

const noDup = [...new Set(dup)];
console.log('noDup:', noDup); // [ 1, 2, 3, 4, 5 ]

// ==========================================
// 7. 불변성(Immutability) 패턴
// ==========================================

// 원본 배열 직접 수정 X
// 새로운 배열을 생성해 변경된 버전을 반환하는 패턴

const original = [1, 2, 3];

// 값 추가 (불변)
const added = [...original, 4];
console.log('added:', added);

// 값 수정 (map 사용)
const updated = original.map((n) => (n === 2 ? 20 : n));
console.log('updated:', updated);

// 값 제거 (filter 사용)
const removed = original.filter((n) => n !== 2);
console.log('removed:', removed);

// 이 모든 경우에서 original은 변경되지 않음
console.log('original:', original);
