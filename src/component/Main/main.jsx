import "./main.css";

function Main() {
  return (
    <div className="Main">
      <div className="Main-contents">
        <img className="Main-twotoo" src="img/twotoo.png" />
        <span className="Main-desc">너와 내가 함께 성장하는 과정</span>
        <div className="Main-buttons">
          <button
            onClick={() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.mashup.twotoo"
              );
            }}
            className="Main-googleBtn"
          >
            <img src="img/button_google.png"></img>
          </button>
          <button
            className="Main-appleBtn"
            onClick={() => {
              window.open(
                "https://apps.apple.com/kr/app/%ED%88%AC%ED%88%AC-twotoo-%EC%BB%A4%ED%94%8C-%EC%B1%8C%EB%A6%B0%EC%A7%80/id6455260918"
              );
            }}
          >
            <img src="img/button_apple.png" />
          </button>
        </div>
        <img className="Main-flowers" src="img/flower.png"></img>
        <img className="Main-bee" src="img/bee.png"></img>
      </div>
      <img className="Main-ground" alt="Ground" src="img/ground.png" />
    </div>
  );
}

export default Main;
