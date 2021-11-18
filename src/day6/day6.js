// src/App.js
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData : ', youtubeData);
  console.log('youtubeData[data]', youtubeData['data']);
  console.log('youtubeData[data][0]', youtubeData['data'][0]);
  return <div>리액트로 데이터 불러오기</div>;
}

export default App;