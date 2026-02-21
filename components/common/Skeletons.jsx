import "./Skeleton.css";

function Skeletons({ width, height }) {
  return (
    <div
      className="skeleton"
      style={{ width: width, height: height }}
    ></div>
  );
}

export default Skeletons;
