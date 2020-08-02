import Arrow from "./../icons/arrow";

export default function PrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        transform: "rotate(180deg)",
      }}
      onClick={onClick}
    >
      <Arrow className="" />
    </div>
  );
}
