import React, { useState } from 'react';
import './App.css';

function Header({ title }) {
  return <h1>{title}</h1>;
}

function Content() {
  const [text, setText] = useState('');
  const [displayedText, setDisplayedText] = useState('');

  const handleButtonClick = () => {
    setDisplayedText(text);
  };

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <textarea rows="4" cols="50" onChange={handleTextAreaChange} />
      <br />
      <button onClick={handleButtonClick}>Display Text</button>
      <p>{displayedText}</p>
    </div>
  );
}

function Footer() {
  return <footer>Albert Einstein: "Imagination is more important than knowledge."</footer>;
}

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <Header title="My React Application" />
      <Content />
      <Footer />
    </div>
  );
}

export default App;

