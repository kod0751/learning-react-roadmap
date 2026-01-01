interface user {
  name: string;
  age: number;
  job: string;
}

function UserCard({ name, age, job }: user) {
  return (
    <div style={{ border: '1px solid black', padding: '20px', margin: '10px' }}>
      <h2>이름: {name}</h2>
      <p>나이: {age}세</p>
      <p>직업: {job}</p>
    </div>
  );
}

export default function Props() {
  return (
    <div>
      <h1>Props 예제</h1>

      <UserCard name="김철수" age={25} job="개발자" />
      <UserCard name="이영희" age={30} job="디자이너" />
      <UserCard name="박민수" age={28} job="기획자" />
    </div>
  );
}
