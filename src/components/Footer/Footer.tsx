import React from 'react';

// A component that renders a footer with a text and logos
function Footer() {
  // Set the style object for the footer
  const style: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    // Add the position property with a fixed value
    // Add the bottom property with a zero value
    bottom: 0,
    // Add the left and right properties with zero values
    left: 0,
    right: 0,
    padding: '5px',
    position: 'fixed',
  };

  // Set the style object for the logos
  const logoStyle: React.CSSProperties = {
    width: '24px',
    height: '24px',
    margin: '6px',
  };

  const textStyle: React.CSSProperties = {
    // Add the fontSize property with a smaller value
    fontSize: '12px',
    color: '#242424',
  };

  // Return the JSX element for the footer
  return (
    <footer style={style}>
      <p style={textStyle}>
        Made by
        <a href="https://github.com/fkuhne" target="_blank">
          {' '}
          fkuhne{' '}
        </a>
        with
      </p>
      <a href="https://github.com" target="_blank">
        <img
          src="https://www.svgrepo.com/show/512317/github-142.svg"
          alt="Github logo"
          style={logoStyle}
        />
      </a>
      <a href="https://vercel.com/" target="_blank">
        <img
          src="https://www.svgrepo.com/show/361653/vercel-logo.svg"
          alt="Vercel logo"
          style={logoStyle}
        />
      </a>
      <a href="https://reactjs.org/" target="_blank">
        <img
          src="https://www.svgrepo.com/show/303157/react-logo.svg"
          alt="React logo"
          style={logoStyle}
        />
      </a>
      <a href="https://www.python.org/" target="_blank">
        <img
          src="https://www.svgrepo.com/show/452091/python.svg"
          alt="Python logo"
          style={logoStyle}
        />
      </a>
      <a href="https://langchain.io/" target="_blank">
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--S9d4oIdL--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/x2zkntkazv4yzt0nzf9j.png"
          alt="Langchain logo"
          style={logoStyle}
        />
      </a>
      <a href="https://openai.com/" target="_blank">
        <img
          src="https://www.svgrepo.com/show/306500/openai.svg"
          alt="OpenAI logo"
          style={logoStyle}
        />
      </a>
    </footer>
  );
}

export default Footer;
