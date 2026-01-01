import { useState } from 'react';

// 예시용 컴포넌트 1
function Hello() {
  return <p>안녕하세요! 이것은 기본 컴포넌트입니다 👋</p>;
}

// 예시용 컴포넌트 2 (props 사용)
function Greeting({ name }: { name: string }) {
  return <p>반가워요, {name}님!</p>;
}

// 예시용 컴포넌트 3 (children 사용)
function Box({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        padding: '15px',
        backgroundColor: '#f1f5f9',
        borderRadius: '8px',
        marginBottom: '10px',
      }}
    >
      {children}
    </div>
  );
}

function ComponentsBasics() {
  const [activeTab, setActiveTab] = useState('basic');

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ color: '#1e40af', marginBottom: '10px' }}>컴포넌트 학습</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        컴포넌트는 React UI의 핵심 단위입니다. 재사용 가능한 UI 조각을
        만들어보세요!
      </p>

      {/* 탭 네비게이션 */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '20px',
          borderBottom: '2px solid #e2e8f0',
        }}
      >
        {['basic', 'reuse', 'props', 'children'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: '10px 20px',
              border: 'none',
              background: activeTab === tab ? '#3b82f6' : 'transparent',
              color: activeTab === tab ? 'white' : '#64748b',
              cursor: 'pointer',
              borderRadius: '4px 4px 0 0',
              fontWeight: activeTab === tab ? 'bold' : 'normal',
            }}
          >
            {tab === 'basic' && '기본 컴포넌트'}
            {tab === 'reuse' && '컴포넌트 분리'}
            {tab === 'props' && 'props 사용'}
            {tab === 'children' && 'children'}
          </button>
        ))}
      </div>

      {/* 1. 기본 컴포넌트 */}
      {activeTab === 'basic' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            1. 기본 컴포넌트 만들기
          </h2>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Hello />
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul>
              <li>컴포넌트는 함수로 작성합니다</li>
              <li>반드시 대문자로 시작해야 합니다</li>
              <li>JSX를 반환합니다</li>
            </ul>
          </div>
        </div>
      )}

      {/* 2. 컴포넌트 분리 & 재사용 */}
      {activeTab === 'reuse' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            2. 컴포넌트 분리 & 재사용
          </h2>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Hello />
            <Hello />
            <Hello />
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul>
              <li>한 번 만든 컴포넌트를 여러 번 사용할 수 있습니다</li>
              <li>유지보수가 쉬워지고 코드 중복이 줄어듭니다</li>
            </ul>
          </div>
        </div>
      )}

      {/* 3. props 사용 */}
      {activeTab === 'props' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            3. props로 데이터 전달하기
          </h2>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#f0f9ff',
              borderRadius: '8px',
              marginBottom: '10px',
            }}
          >
            <Greeting name="철수" />
            <Greeting name="영희" />
            <Greeting name="Din" />
          </div>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul>
              <li>props는 부모가 자식 컴포넌트에게 전달하는 데이터입니다</li>
              <li>객체 형태로 전달되며 읽기 전용입니다</li>
              <li>TypeScript에서는 타입 정의하여 사용하면 더 좋습니다</li>
            </ul>
          </div>
        </div>
      )}

      {/* 4. children 사용 */}
      {activeTab === 'children' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            4. children 사용하기
          </h2>

          <Box>
            <p>이 텍스트는 Box 컴포넌트의 children 입니다.</p>
          </Box>
          <Box>
            <button>버튼도 children으로 넣을 수 있어요</button>
          </Box>

          <div
            style={{
              padding: '15px',
              backgroundColor: '#fef3c7',
              borderRadius: '8px',
            }}
          >
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul>
              <li>children은 컴포넌트 태그 사이의 내용을 의미합니다</li>
              <li>레이아웃 컴포넌트에서 자주 사용됩니다</li>
              <li>재사용성을 크게 높여줍니다</li>
            </ul>
          </div>
        </div>
      )}

      {/* 주의사항 */}
      <div
        style={{
          marginTop: '30px',
          padding: '20px',
          backgroundColor: '#fef2f2',
          borderLeft: '4px solid #ef4444',
          borderRadius: '4px',
        }}
      >
        <h3 style={{ marginTop: 0, color: '#dc2626' }}>⚠️ 컴포넌트 주의사항</h3>
        <ul>
          <li>컴포넌트 이름은 반드시 대문자로 시작해야 합니다</li>
          <li>props는 읽기 전용입니다 (수정 X)</li>
          <li>children은 언제든 사용할 수 있는 특별한 props입니다</li>
        </ul>
      </div>
    </div>
  );
}

export default ComponentsBasics;
