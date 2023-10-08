import "./stepOne.css";

function StepOne() {
  return (
    <div className="StepOne">
      <div className="StepOne-Text">
        <div className="StepOne-Step1">
          STEP 1<br />
        </div>
        <div className="StepOne-Title">
          짝꿍에게 선물할 꽃을 선택해요
          <br />
        </div>
        <div className="StepOne-Desc">
          80% 이상 달성시 꽃을 확인 할 수 있어요
        </div>
      </div>
      <img
        className="StepOne-Flower"
        alt="StepOneFlower"
        src="img/StepOne-flower.png"
      />
      <div className="StepOne-ImageContainer">
        <img
          className="StepOne-Choice"
          alt="choice"
          src="img/StepOne-choice.png"
        />
      </div>
    </div>
  );
}

export default StepOne;
