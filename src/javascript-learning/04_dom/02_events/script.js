// ===============================
// 1. 클릭 이벤트
// ===============================
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log('버튼이 클릭되었습니다!');
  btn.classList.toggle('highlight');
});

// ===============================
// 2. input 이벤트
// ===============================
const input = document.getElementById('input');

input.addEventListener('input', (e) => {
  console.log('입력 값:', e.target.value);
});

// ===============================
// 3. mouseover / mouseout 이벤트
// ===============================
input.addEventListener('mouseover', () => {
  input.style.border = '2px solid blue';
});

input.addEventListener('mouseout', () => {
  input.style.border = '1px solid #ccc';
});

// ===============================
// 4. 리스트 아이템 클릭 이벤트
// ===============================
// ❌ 개별 요소에 addEventListener 달기 (비효율적)
const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('click', () => {
    console.log(item.textContent);
  });
});

// ===============================
// 5. 이벤트 위임(Event Delegation)
// ===============================
// 부모 요소에 단 한 번만 이벤트를 등록
const list = document.getElementById('list');

list.addEventListener('click', (event) => {
  // 클릭된 요소가 li인지 확인
  if (event.target.classList.contains('item')) {
    console.log('클릭된 아이템:', event.target.textContent);
    event.target.classList.toggle('highlight');
  }
});
