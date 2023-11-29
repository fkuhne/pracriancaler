import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Click me</button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
