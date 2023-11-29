// A component that renders a container with a border and a responsive width
function Container(props: { children: any }) {
  // Get the children prop from the props object
  const children = props.children;

  // Set the style object for the container
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent: 'center',
    // Add the border property with a solid gray value
    border: '1px solid gray',
    // Add the borderRadius property with a value
    borderRadius: '10px',
    // Add the height property with a 100% value
    height: 'fit-content',
    // Add the maxWidth property with a 1000px value
    maxWidth: '1240px',
    // Add the margin property with a auto value
    margin: 'auto',
    padding: '10px',
    width: 'auto',
    minWidth: '640px',
  };

  // Return the JSX element for the container
  return <div style={style}>{children}</div>;
}

export default Container;
