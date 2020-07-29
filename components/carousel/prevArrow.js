import Arrow from "./../icons/arrow";

export default function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "green",
        transform: "rotate(180deg)",
        fill: "red",
      }}
      onClick={onClick}
    >
      <Arrow className="" />
    </div>
  );
}
