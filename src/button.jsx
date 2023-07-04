const Button = (prop) => {
  return (
    <button
      className={prop.num.isClicked ? "isClicked" : ""}
      onClick={() => prop.handleClickNumber(prop.num.id)}
    >
      {prop.num.value}
    </button>
  );
};

export default Button;
