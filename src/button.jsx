const Button = (prop) => {
  let class_name = prop.num.isClicked ? "isClicked" : "";
  let class_name_animate = prop.animate ? "animate-buttons" : "";
  return (
    <button
      className={`number-buttons ${class_name} ${class_name_animate}`}
      onClick={() => {
        prop.handleClickNumber(prop.num.id);
      }}
      style={{ [`--i`]: `${prop.num.id}` }}
    >
      {prop.num.value}
    </button>
  );
};

export default Button;
