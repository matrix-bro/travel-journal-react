import earthIcon from "../assets/icon-earth.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={earthIcon} alt="" />
        <span>my travel journal</span>
      </div>
    </nav>
  );
};

export default Navbar;
