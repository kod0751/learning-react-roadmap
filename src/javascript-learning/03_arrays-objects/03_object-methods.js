// ==========================================
// 객체(Object) 기본 메서드 & 패턴
// ==========================================

// 기본 객체
const user = {
  name: 'Tom',
  item: { a: '123' },
  age: 20,
  city: 'Seoul',
};

// ==========================================
// 1. Object.keys / Object.values / Object.entries
// ==========================================

// keys → 객체의 key 배열로 반환
console.log('keys:', Object.keys(user)); // ["name","age","city"]

// values → 값 배열로 반환
console.log('values:', Object.values(user)); // ["Tom",20,"Seoul"]

// entries → [key, value] 형태의 2차원 배열
console.log('entries:', Object.entries(user));
// [["name","Tom"], ["age",20], ["city","Seoul"]]

// ==========================================
// 2. 객체 복사 (얕은 복사)
// ==========================================

console.log('=-=-=-=-=-=-=');

// (1) 스프레드 연산자
const copy1 = { ...user };
console.log('spread copy:', copy1);

// (2) Object.assign
const copy2 = Object.assign({}, user);
console.log('assign copy:', copy2);

// 원본과는 참조가 다름 (불변성 유지)
console.log(user === copy1); // false
copy1.item.a = '321';
console.log(user, copy1); //참조 타입 → 원본도 바뀜

// ==========================================
// 3. Object.freeze & Object.seal
// ==========================================

// freeze: 완전 불변 → 추가/수정/삭제 모두 불가
const frozen = Object.freeze({ a: 1, b: 2 });
// frozen.a = 999; --- TypeError: Cannot assign to read only property 'a' of object '#<Object>'
console.log('freeze:', frozen); // 변화 없음

// seal: 추가/삭제 불가, 수정만 가능
const sealed = Object.seal({ a: 1, b: 2 });
sealed.a = 10; // OK
// sealed.c = 3; // X
console.log('seal:', sealed);

// ==========================================
// 4. in 연산자 — key 존재 여부 확인
// ==========================================

console.log('name in user:', 'name' in user); // true
console.log('age in user:', 'age' in user); // true
console.log('email in user:', 'email' in user); // false

// ==========================================
// 5. hasOwnProperty — 직접 가진 키인지 확인
// ==========================================

console.log(user.hasOwnProperty('name')); // true
console.log(user.hasOwnProperty('toString')); // false (프로토타입에 있음)

// ==========================================
// 6. 구조 분해 할당 (Destructuring)
// ==========================================

// 객체에서 값을 뽑아 변수로 directly 매핑
const { name, city } = user;
console.log('destructure:', name, city);

// alias (다른 변수명 사용)
const { age: userAge } = user;
console.log('alias:', userAge);

// ==========================================
// 7. 객체 불변성(Immutability) 업데이트 패턴
// ==========================================

// (1) 업데이트할 때 새 객체 반환
const updatedUser = {
  ...user,
  age: 25, // age만 변경
};

console.log('updatedUser:', updatedUser);
console.log('original user:', user); // 원본은 그대로

// (2) 특정 key 제거 (불변)
const { city: _, ...withoutCity } = user;
console.log('remove key:', withoutCity);

// ==========================================
// 8. Object.entries + map 조합 (객체 map처럼 사용)
// ==========================================

// 모든 값에 "님" 붙이기 (예: {name: "Tom"} → {name: "Tom님"})
const nameObj = { a: 'Tom', b: 'Jane' };

const mapped = Object.fromEntries(
  Object.entries(nameObj).map(([key, value]) => [key, value + '님'])
);

console.log('object map:', mapped);

// ==========================================
// 9. Object.fromEntries — entries → object
// ==========================================

const pairs = [
  ['x', 10],
  ['y', 20],
];

const objFromPairs = Object.fromEntries(pairs);
console.log('fromEntries:', objFromPairs); // {x:10, y:20}
