// ===========================================
// DOM 요소 선택
// ===========================================
const loadBtn = document.getElementById('load-btn');
const statusText = document.getElementById('status');
const list = document.getElementById('list');

// ===========================================
// 1. fetch 기본 함수
// ===========================================
// JSONPlaceholder의 posts 데이터를 사용
// https://jsonplaceholder.typicode.com/posts

async function loadPosts() {
  try {
    // 로딩 UI 표시
    statusText.textContent = '로딩 중...';
    statusText.className = 'loading';
    list.innerHTML = '';

    // Fetch 요청
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // HTTP 에러 처리 (200~299가 아니면 오류)
    if (!response.ok) {
      throw new Error(`HTTP 오류! 상태코드: ${response.status}`);
    }

    // JSON 파싱
    const posts = await response.json();

    // 데이터 렌더링
    renderPosts(posts.slice(0, 10)); // 10개만 표시

    statusText.textContent = '불러오기 완료!';
    statusText.className = '';
  } catch (error) {
    console.error(error);
    statusText.textContent = '데이터 불러오기에 실패했습니다.';
    statusText.className = 'error';
  }
}

// ===========================================
// 2. DOM에 리스트 렌더링
// ===========================================
function renderPosts(posts) {
  list.innerHTML = ''; // 기존 내용 제거

  posts.forEach((post) => {
    const li = document.createElement('li');

    li.innerHTML = `
      <strong>${post.title}</strong>
      <p>${post.body}</p>
    `;

    list.appendChild(li);
  });
}

// ===========================================
// 3. 버튼 클릭 시 실행
// ===========================================
loadBtn.addEventListener('click', loadPosts);
