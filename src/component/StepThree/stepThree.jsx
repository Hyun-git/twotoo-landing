import "./stepThree.css";

function StepThree() {
  return (
    <div className="StepThree">
      <div>
        <div className="StepThree-Text">
          <div className="StepThree-Step1">
            STEP 3<br />
          </div>
          <div className="StepThree-Title">
            서로에게 선물한 꽃을 확인해요 <br />
          </div>
          <div className="StepThree-Desc">
            80% 이상 달성시 꽃을 확인 할 수 있어요
          </div>
        </div>
        <div className="StepThree-Pictures">
          <img className="StepThree-Button" src="img/StepThree-button.png" />
          <img className="Stepthree-Card" src="img/StepThree-card.png" />
        </div>
      </div>
    </div>
  );
}

export default StepThree;
