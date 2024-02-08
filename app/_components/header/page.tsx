const Header = async () => {
  return (
    <div className="">
      <img
        src="/images/gradient.png"
        alt="Background Image"
        className="object-cover max-w-7xl"
        draggable="false"
        style={{ filter: "blue(10px)", width: "120vw" }}
      />
      <div className="relative min-h-7xl"></div>
    </div>
  );
};
export default Header;
