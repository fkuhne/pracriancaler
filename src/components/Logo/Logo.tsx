import logo from '../../assets/pracriancaler_logo_150.png';

function Logo(props: { size: any }) {
  const size = props.size;

  const style: React.CSSProperties = {
    width: size + 'px',
  };

  return <img src={logo} alt="Pra Criança Ler" style={style} />;
}

export default Logo;
