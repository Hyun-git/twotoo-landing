import "./stepFour.css";

function StepFour() {
  return (
    <div className="StepFour">
      <div className="StepFour-Text">
        <div className="StepFour-Step1">
          STEP 4<br />
        </div>
        <div className="StepFour-Title">
          ‘콕 찌르기’로 짝꿍에게
          <br />
          메세지를 보내요
        </div>
        <div className="StepFour-Desc">하루에 최대 5번까지 보낼 수 있어요 </div>
        <img className="StepFour-Card" src="img/StepFour-card.png" />
      </div>

      <img className="StepFour-Cloud" src="img/StepFour-cloud.png" />
    </div>
  );
}

export default StepFour;
