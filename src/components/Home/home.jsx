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
      algo: "Console Output Console Output Console OutputConsole OutputConsole OutputConsole Output",
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
            <div className="level blue-label">• Intermediate</div>
          </div>
          <div className="questions">
            {data.map((e, idx) => (
              <QuestionCard key={idx} data={e} />
            ))}
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
