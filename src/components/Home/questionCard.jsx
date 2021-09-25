import "../../css/Home/questionCard.css";

let QuestionCard = ({ data }) => {
  let arr = ["#fad390", "#ffcccc", "#dfe4ea"];
  return (
    <>
      <div
        className="question-card"
        style={{
          backgroundColor:
            arr[Math.floor((Math.random() * arr.length * 8) % arr.length)],
        }}
      >
        <div className="ques-title">
          <h3>{data.ques}</h3>
          <p>
            <span>Easy </span>• Problem Solving (Basic), Max Score 20, Success
            Rate: 90.70%
          </p>
        </div>

        <div className="companies">
          Amazon • Cisco • Wipro • TCS • DXC • Infotech
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
