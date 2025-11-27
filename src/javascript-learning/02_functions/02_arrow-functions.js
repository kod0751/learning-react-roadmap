// 1. 기본 형태
const add = (x, y) => {
  return x + y;
};
console.log('add :', add(1, 2));

// 2. 한 줄 반환
const multiply = (x, y) => x * y;
console.log('multiply:', multiply(2, 4));

// 3. 매개변수 하나 (괄호 생략)
const greet = (name) => console.log(`Hello, ${name}!`);
greet('Alice');

// 4. 매개변수 없음
const sayHi = () => console.log('Hi!');
sayHi();

// 5. 객체 반환 시 소괄호로 감싸기
const makeUser = (name) => ({
  name,
  createdAt: Date.now(),
});

console.log('makeUser:', makeUser('Bob'));

// 6. this 바인딩 차이 (중요)
const user = {
  name: 'Tom',
  // setTimeout 내부에서 this를 안전하게 사용 가능
  sayName: function () {
    setTimeout(() => {
      console.log('My name is', this.name);
    }, 300);
  },
};

user.sayName();
