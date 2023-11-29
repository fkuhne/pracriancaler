import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  // Set the style object for the header
  const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  // Set the style object for the text
  const textStyle: React.CSSProperties = {
    fontSize: '34px',
    fontFamily: 'Cedarville Cursive',
    margin: '20px 0 20px 0',
  };

  // Return the JSX element for the header
  return (
    <header style={style}>
      <p style={textStyle}>Pra Criança Ler</p>
      <Logo size={64} />
    </header>
  );
}

export default Header;
