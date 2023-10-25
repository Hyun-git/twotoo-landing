import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <img
        onClick={() => window.open("https://www.instagram.com/twotoo.22/")}
        target="_blank"
        className="Footer_Instargram"
        src="img/Instargram.png"
      />
      <div className="Footer_Link">
        <a href="https://two2too2.github.io/personal.html" target="_blank">
          개인정보처리방침
        </a>
        <a href="https://two2too2.github.io/" target="_blank">
          이용가이드
        </a>
        <a href="https://forms.gle/ywBXSkWdRJFx87Dv7" target="_blank">
          투투에 문의하기
        </a>
        <a href="https://two2too2.github.io/creater.html" target="_blank">
          만든이들
        </a>
      </div>
      <div className="Footer_Copyright">
        Copyright © Twotoo. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
