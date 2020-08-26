import React from 'react';
import Hello from './Hello' //상대경로로 불러옴 .js는 생략가능
import './App.css'

function App() {
  const lorem = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts'
  const myStyle = {
    background: 'black',
    color: 'white',
    fontSize: 24,
    lineHeight: '1em',
    padding: 20
  }
  return (
    <>
      <div style={myStyle}>{lorem}</div>
      <div className="gray-box"></div>
      <Hello />
    </>
  );
}

export default App;
