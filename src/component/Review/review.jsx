import "./review.css";

function Review() {
  return (
    <div className="Review">
      <div className="Review_Title">투투 사용자들의 후기</div>
      <div className="Review_Images_container">
        <img className="Review_Images" src="img/ReviewImages.png" />
        <img className="Review_Images_dup" src="img/ReviewImages.png" />
      </div>
    </div>
  );
}

export default Review;
