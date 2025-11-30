// =======================================
// 1. 텍스트 변경
// =======================================
const title = document.getElementById('title');
const changeTextBtn = document.getElementById('change-text-btn');

changeTextBtn.addEventListener('click', () => {
  title.textContent = '텍스트가 변경되었습니다!';
});

// =======================================
// 2. 클래스 토글
// =======================================
const toggleClassBtn = document.getElementById('toggle-class-btn');

toggleClassBtn.addEventListener('click', () => {
  title.classList.toggle('highlight');
});

// =======================================
// 3. 새로운 요소 생성 및 추가
// =======================================
const list = document.getElementById('list');
const addItemBtn = document.getElementById('add-item-btn');

addItemBtn.addEventListener('click', () => {
  const li = document.createElement('li'); // 새로운 li 생성
  li.textContent = `새 아이템 ${list.children.length + 1}`;
  list.appendChild(li); // 리스트 끝에 추가
});

// =======================================
// 4. 마지막 요소 제거
// =======================================
const removeItemBtn = document.getElementById('remove-item-btn');

removeItemBtn.addEventListener('click', () => {
  const lastItem = list.lastElementChild;
  if (lastItem) {
    lastItem.remove();
  }
});

// =======================================
// 5. input의 값으로 요소 추가
// =======================================
const input = document.getElementById('input');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value.trim() !== '') {
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    list.appendChild(newLi);

    input.value = ''; // 입력창 초기화
  }
});

// =======================================
// 6. style 직접 조작
// =======================================
title.style.cursor = 'pointer';

title.addEventListener('click', () => {
  title.style.color = title.style.color === 'red' ? 'black' : 'red';
});
