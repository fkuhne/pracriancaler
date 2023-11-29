function RadioButtonsSize(props: { onChange: any }) {
  // Get the onChange prop from the props object
  const onChange = props.onChange;

  return (
    <form>
      <input
        type="radio"
        name="responseSize"
        value="short"
        onChange={onChange}
      />{' '}
      Short
      <input
        type="radio"
        name="responseSize"
        value="medium"
        onChange={onChange}
      />{' '}
      Medium
      <input
        type="radio"
        name="responseSize"
        value="long"
        onChange={onChange}
      />{' '}
      Long
    </form>
  );
}

export default RadioButtonsSize;
