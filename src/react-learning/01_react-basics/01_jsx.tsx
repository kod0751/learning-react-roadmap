import { useState } from 'react';

// JSX 기초 학습 예시
function JSX() {
  const [activeTab, setActiveTab] = useState('expressions');

  // 1. JSX에서 JavaScript 표현식 사용
  const name = 'React 학습자';
  const age = 25;
  const isStudent = true;

  // 2. 함수 정의
  const formatDate = () => {
    return new Date().toLocaleDateString('ko-KR');
  };

  // 3. 배열 데이터
  const fruits = ['사과', '바나나', '오렌지'];

  // 4. 객체 데이터
  // const user = {
  //   name: '김철수',
  //   role: '개발자',
  //   level: 'Junior',
  // };

  // 5. 스타일 객체
  const boxStyle = {
    padding: '15px',
    backgroundColor: '#f0f9ff',
    borderRadius: '8px',
    marginBottom: '10px',
  };

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'sans-serif',
      }}
    >
      <h1 style={{ color: '#1e40af', marginBottom: '10px' }}>JSX 기초 학습</h1>
      <p style={{ color: '#64748b', marginBottom: '30px' }}>
        JSX는 JavaScript + XML입니다. HTML처럼 보이지만 JavaScript 코드입니다!
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
        {['expressions', 'conditions', 'lists', 'styles'].map((tab) => (
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
            {tab === 'expressions' && '표현식'}
            {tab === 'conditions' && '조건부'}
            {tab === 'lists' && '리스트'}
            {tab === 'styles' && '스타일'}
          </button>
        ))}
      </div>

      {/* 1. JavaScript 표현식 */}
      {activeTab === 'expressions' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            1. JSX에서 JavaScript 표현식 사용하기
          </h2>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>중괄호 {'{}'} 안에 표현식 넣기</h3>
            <p>
              안녕하세요, <strong>{name}</strong>님!
            </p>
            <p>나이: {age}세</p>
            <p>2 + 2 = {2 + 2}</p>
            <p>오늘 날짜: {formatDate()}</p>
            <p>학생 여부: {isStudent ? '학생입니다' : '학생이 아닙니다'}</p>
          </div>

          <div style={{ ...boxStyle, backgroundColor: '#fef3c7' }}>
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>
                JSX에서 <code>{'{}'}</code>를 사용하면 JavaScript 코드를 실행할
                수 있습니다
              </li>
              <li>변수, 함수 호출, 연산 모두 가능합니다</li>
              <li>
                객체는 직접 렌더링할 수 없습니다 (문자열이나 숫자로 변환 필요)
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* 2. 조건부 렌더링 */}
      {activeTab === 'conditions' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            2. 조건부 렌더링
          </h2>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>삼항 연산자 사용</h3>
            <p>{age >= 20 ? '성인입니다 🎉' : '미성년자입니다'}</p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>&& 연산자 사용</h3>
            {isStudent && <p>✅ 학생 할인이 적용됩니다!</p>}
            {!isStudent && <p>❌ 학생 할인이 적용되지 않습니다</p>}
          </div>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>if-else는 JSX 밖에서</h3>
            {(() => {
              if (age < 13) return <p>어린이</p>;
              if (age < 20) return <p>청소년</p>;
              return <p>성인</p>;
            })()}
          </div>

          <div style={{ ...boxStyle, backgroundColor: '#fef3c7' }}>
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>
                삼항 연산자: <code>조건 ? 참 : 거짓</code>
              </li>
              <li>
                && 연산자: <code>조건 && JSX</code> (조건이 참일 때만 렌더링)
              </li>
              <li>복잡한 조건은 함수나 변수로 분리하세요</li>
            </ul>
          </div>
        </div>
      )}

      {/* 3. 리스트 렌더링 */}
      {activeTab === 'lists' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            3. 리스트 렌더링
          </h2>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>map()으로 배열 렌더링</h3>
            <ul>
              {fruits.map((fruit, index) => (
                <li key={index}>
                  {index + 1}. {fruit}
                </li>
              ))}
            </ul>
          </div>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>객체 배열 렌더링</h3>
            {[
              { id: 1, task: 'React 공부하기', done: true },
              { id: 2, task: 'JSX 이해하기', done: true },
              { id: 3, task: 'Component 만들기', done: false },
            ].map((item) => (
              <div
                key={item.id}
                style={{
                  padding: '10px',
                  marginBottom: '5px',
                  backgroundColor: item.done ? '#d1fae5' : '#fee2e2',
                  borderRadius: '4px',
                }}
              >
                {item.done ? '✅' : '⏳'} {item.task}
              </div>
            ))}
          </div>

          <div style={{ ...boxStyle, backgroundColor: '#fef3c7' }}>
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>
                <code>map()</code>을 사용해 배열을 JSX로 변환합니다
              </li>
              <li>
                각 요소는 고유한 <code>key</code> prop이 필요합니다
              </li>
              <li>key는 React가 변경사항을 추적하는 데 사용됩니다</li>
              <li>가능하면 index보다는 고유한 id를 사용하세요</li>
            </ul>
          </div>
        </div>
      )}

      {/* 4. 스타일링 */}
      {activeTab === 'styles' && (
        <div>
          <h2 style={{ color: '#3b82f6', marginBottom: '15px' }}>
            4. JSX 스타일링
          </h2>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>인라인 스타일 (객체 사용)</h3>
            <p style={{ color: 'blue', fontSize: '18px', fontWeight: 'bold' }}>
              파란색 굵은 텍스트
            </p>
            <p
              style={{
                backgroundColor: '#fcd34d',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              노란 배경의 박스
            </p>
          </div>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>스타일 객체 재사용</h3>
            <div style={boxStyle}>이 박스는 boxStyle 객체를 사용합니다</div>
          </div>

          <div style={boxStyle}>
            <h3 style={{ marginTop: 0 }}>className 사용 (권장)</h3>
            <p style={{ color: '#64748b', fontSize: '14px' }}>
              실제 프로젝트에서는 CSS 파일이나 CSS-in-JS 라이브러리를 사용하는
              것이 좋습니다
            </p>
          </div>

          <div style={{ ...boxStyle, backgroundColor: '#fef3c7' }}>
            <h4 style={{ marginTop: 0 }}>💡 핵심 포인트</h4>
            <ul style={{ marginBottom: 0 }}>
              <li>
                JSX에서는 <code>style={'{{}}'}</code> (객체 형태)로 스타일을
                지정합니다
              </li>
              <li>
                CSS 속성은 camelCase로 작성합니다 (background-color →
                backgroundColor)
              </li>
              <li>
                <code>class</code> 대신 <code>className</code>을 사용합니다
              </li>
              <li>
                인라인 스타일은 간단한 경우만 사용하고, CSS 파일이나
                styled-components를 권장합니다
              </li>
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
        <h3 style={{ marginTop: 0, color: '#dc2626' }}>⚠️ JSX 주의사항</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>
            JSX는 하나의 최상위 요소만 반환해야 합니다 (Fragment{' '}
            <code>&lt;&gt;</code> 사용 가능)
          </li>
          <li>
            모든 태그는 닫혀야 합니다 (<code>&lt;img /&gt;</code>,{' '}
            <code>&lt;input /&gt;</code>)
          </li>
          <li>
            <code>class</code> → <code>className</code>, <code>for</code> →{' '}
            <code>htmlFor</code>
          </li>
          <li>
            JSX 주석은 <code>{'{/* 주석 */'}</code> 형태입니다
          </li>
        </ul>
      </div>
    </div>
  );
}

export default JSX;
