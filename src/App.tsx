import './App.css';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import React, { useState } from 'react';
import RadioButtonsSize from './components/RadioButtonsSize/RadioButtonsSize';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    console.log(inputValue);
    console.log(selectedSize);
  };

  const handleChangeSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSize(event.target.value);
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <RadioButtonsSize onChange={handleChangeSize} />
          <input type="text" value={inputValue} onChange={handleInputChange} />
          <button onClick={handleButtonClick}>Click me</button>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default App;
