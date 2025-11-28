// 배열 기본 메서드 정리

// 기본 배열
const numbers = [1, 2, 3, 4];

// ==========================
// 1. push / pop
// ==========================

// push: 배열 끝에 요소 추가 → 새로운 length 반환
numbers.push(5); // [1,2,3,4,5]
console.log('push:', numbers);

// pop: 배열 끝 요소 제거 → 제거된 요소 반환
const pop = numbers.pop(); //5
console.log('pop:', pop, numbers);

// ==========================
// 2. unshift / shift
// ==========================

// unshift: 배열 앞에 요소 추가
numbers.unshift(0); // [0,1,2,3,4]
console.log('unshift:', numbers);

// shift: 배열 앞 요소 제거
const shifted = numbers.shift(); // 0
console.log('shift:', shifted, numbers);

// ==========================
// 3. includes / indexOf
// ==========================

// includes: 요소 포함 여부 true/false
console.log('includes 3:', numbers.includes(3));

// indexOf: 요소가 있는 index 반환 (없으면 -1)
console.log('indexOf 3:', numbers.indexOf(3));

// ==========================
// 4. slice (원본 유지)
// ==========================

// slice(start, end): end는 포함 X
const sliced = numbers.slice(1, 3); // [2,3]
console.log('slice:', sliced, numbers); // 원본 그대로

// ==========================
// 5. splice (원본 변경 주의!)
// ==========================

// splice(start, deleteCount, ...items)
const fruits = ['apple', 'banana', 'orange'];

// 1번 index에서 1개 제거하고 "grape" 추가
fruits.splice(1, 1, 'grape'); // [ 'apple', 'grape', 'orange' ]
console.log('splice:', fruits);

fruits.splice(2, 1); //orange 제거
console.log('splice:', fruits); // [ 'apple', 'grape' ]

// ==========================
// 6. forEach (반복 수행)
// ==========================

// forEach는 새로운 배열을 만들지 않음
numbers.forEach((n, i) => {
  console.log(`forEach index:${i} value:${n}`);
});

// ==========================
// 7. map (새 배열 반환)
// ==========================

// map: 모든 요소를 변환하여 새로운 배열 생성
const doubled = numbers.map((n) => n * 2);
console.log('map:', doubled, numbers); // 원본 유지

// ==========================
// 8. filter (조건 통과한 요소만 반환) (새 배열 반환)
// ==========================

// 홀수만 걸러내기
const odd = numbers.filter((n) => n % 2 === 1);
console.log('filter:', odd, numbers);

// ==========================
// 9. find (조건 만족하는 첫 요소 반환)
// ==========================

const firstBig = numbers.find((n) => n > 2); // 3
console.log('find:', firstBig);

// ==========================
// 10. some / every
// ==========================

// some: 하나라도 조건 만족하면 true
console.log(
  'some > 3:',
  numbers.some((n) => n > 3)
); // true

// every: 모두 만족해야 true
console.log(
  'every > 0:',
  numbers.every((n) => n > 0)
); // true
