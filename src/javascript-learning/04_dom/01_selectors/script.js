// ==============================
// 1. document.getElementById()
// ==============================
// id로 단일 요소 선택 (가장 빠름)
const title = document.getElementById('title');
console.log('getElementById:', title);

// ==============================
// 2. document.getElementsByClassName()
// ==============================
// class로 여러 요소 선택 → HTMLCollection 반환
const textItems = document.getElementsByClassName('text');
console.log('getElementsByClassName:', textItems);

// ==============================
// 3. document.getElementsByTagName()
// ==============================
// 태그 이름으로 선택 → HTMLCollection 반환
const listItems = document.getElementsByTagName('li');
console.log('getElementsByTagName:', listItems);

// ==============================
// 4. document.querySelector()
// ==============================
// CSS 선택자로 '하나만' 선택 (첫 번째 요소)
const firstText = document.querySelector('.text');
console.log('querySelector:', firstText);

// ==============================
// 5. document.querySelectorAll()
// ==============================
// CSS 선택자로 '여러 요소' 선택 → NodeList 반환(유사 배열)
const allItems = document.querySelectorAll('.item');
console.log('querySelectorAll:', allItems);

// ==============================
// 6. 선택한 요소 스타일 변경
// ==============================
title.style.color = 'blue';
firstText.style.fontWeight = 'bold';

// ==============================
// 7. NodeList 반복문으로 처리
// ==============================
allItems.forEach((li) => {
  li.classList.add('highlight');
});

// ==============================
// 8. 버튼 클릭해 스타일 토글해보기
// ==============================
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  title.classList.toggle('highlight');
});
