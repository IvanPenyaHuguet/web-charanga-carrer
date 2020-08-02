import Arrow from "./../icons/arrow";

export default function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <i>
        <Arrow className="" />
      </i>
    </div>
  );
}
