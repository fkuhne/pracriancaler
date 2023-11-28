import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  setCount(1);

  return (
    <>
      <h1>Pra Crianca Ler</h1>
    </>
  );
}

export default App;
