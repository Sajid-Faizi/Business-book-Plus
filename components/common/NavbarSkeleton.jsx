import Skeleton from "./Skeleton";
import "./Skeleton.css";

function NavbarSkeleton() {
  return (
    <nav className="navbar-skeleton">

      {/* Logo */}
      <div className="nav-left">
        <Skeleton width="180px" height="40px" />
      </div>

      {/* Menu */}
      <div className="nav-center">
        <Skeleton width="70px" height="20px" />
        <Skeleton width="90px" height="20px" />
        <Skeleton width="80px" height="20px" />
        <Skeleton width="80px" height="20px" />
        <Skeleton width="80px" height="20px" />
      </div>

      {/* Buttons */}
      <div className="nav-right">
        <Skeleton width="90px" height="35px" />
        <Skeleton width="130px" height="35px" />
      </div>

    </nav>
  );
}

export default NavbarSkeleton;
