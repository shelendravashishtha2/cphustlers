import "../../css/Navbar/navbar.css";

let Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-links">
          <div className="nav-link">Learning</div>
          <div className="nav-link">Questions</div>
        </div>
        <div className="logo">
          <img
            src="https://files.muzli.space/55b50c283abab6eb865e229341530635.jpeg"
            alt=""
          />
        </div>
        <div className="nav-links">
          <div className="nav-link">Compete</div>
          <div className="nav-link">
            <a href="/">
              <div className="nav-profile-img">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                  alt=""
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
