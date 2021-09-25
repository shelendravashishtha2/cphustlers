import "../../css/Home/profile-card.css";
import ReactStars from "react-rating-stars-component";
import Badge from "./badge";

let ProfileCard = () => {
  return (
    <>
      <div className="profile-card-home">
        <div className="profile-info">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
            alt=""
          />
          <div className="info-container">
            <h3>Shelendra Vashishtha</h3>
            <ReactStars count={5} value={2} edit={false} />
          </div>
        </div>
        <div className="profile-cards">
          <div className="content-container">
            <h4>Questions</h4>
            <p>1000</p>
          </div>
          <div className="content-container">
            <h4>Level</h4>
            <p>Beginner</p>
          </div>
          <div className="content-container">
            <h4>Badges</h4>
            <p>0</p>
          </div>
        </div>
        <div className="badge-container">
          <Badge />
          <Badge />
          <Badge />
          <Badge />
          <Badge />
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
