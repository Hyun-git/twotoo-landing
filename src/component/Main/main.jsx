import "./main.css";

function Main() {
  return (
    <div className="Main">
      <div className="Main-contents">
        <img className="Main-twotoo" src="img/twotoo.png" />
        <span className="Main-desc">너와 내가 함께 성장하는 과정</span>
        <div className="Main-buttons">
          <button className="Main-googleBtn">
            <img src="img/button_google.png"></img>
          </button>
          <button className="Main-appleBtn">
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
