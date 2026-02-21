import Skeleton from "./Skeletons";
import "./Skeleton.css";

function HeroSkeleton() {
  return (
    <section className="hero-skeleton">
      
      {/* LEFT SIDE */}
      <div className="hero-left">
        <Skeleton width="180px" height="35px" />
        <Skeleton width="400px" height="60px" />
        <Skeleton width="450px" height="60px" />
        <Skeleton width="380px" height="60px" />
        <Skeleton width="500px" height="20px" />
        <Skeleton width="450px" height="20px" />

        <div className="btn-group">
          <Skeleton width="180px" height="50px" />
          <Skeleton width="180px" height="50px" />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hero-right">
        <Skeleton width="100%" height="450px" />
      </div>

    </section>
  );
}

export default HeroSkeleton;
