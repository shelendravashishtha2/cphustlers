import "../../css/Home/home.css";
import ProfileCard from "./profile-card";
import QuestionCard from "./questionCard";
import HomeVideo from "./videos";

let Home = () => {
  let data = [
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
    {
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },{
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },{
      ques: "Hello World",
      comp: "Amazon",
      algo: "Console Output",
    },
  ];
  return (
    <>
      <div className="home">
        <div className="home-main">
          <div className="sorting">
            <div className="dropdown">
              <select name="" id="">
                <option value="any">Anything</option>
                <option value="any">thing</option>
                <option value="any">this</option>
              </select>
            </div>
            <div className="level blue-label">
              <span>•</span> Intermediate
            </div>
          </div>
          <div className="questions">
            <div className="ques-head">
              <div className="srno hp">Sr No.</div>
              <div className="ques hp">Questions</div>
              <div className="algo hp">Algorithm</div>
              <div className="level hp">level/Companies</div>
            </div>
            <div className="ques-main">
              {data.map((e, idx) => (
                <QuestionCard data={{ ...e, srno: idx + 1 }} />
              ))}
            </div>
          </div>
        </div>
        <div className="home-sidebar">
          <ProfileCard />
          <HomeVideo />
        </div>
      </div>
    </>
  );
};

export default Home;
