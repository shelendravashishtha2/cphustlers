import "../../css/Home/questionCard.css";

let QuestionCard = ({ data }) => {
  return (
    <>
      <div className="question-card">
        <div className="que-srno hp">{data.srno}</div>
        <div className="que-ques hp">{data.ques}</div>
        <div className="que-algo hp">{data.algo}</div>
        <div className="que-level hp">{data.comp}</div>
      </div>
    </>
  );
};

export default QuestionCard;
