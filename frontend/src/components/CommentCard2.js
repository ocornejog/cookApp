import React from "react";
import "../style.css/CommentCard2.css";

const CommentCard2 = ({ name, date, starRating, comment }) => {
  return (
    <div className="comment-card">
      <div className="header">
        <div className="large-icon">
          <ion-icon name="person-circle"></ion-icon>
        </div>
        <span className="name">{name}</span>
        <span className="date">{date.toLocaleDateString()}</span>
      </div>
      <div class="stars2">
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
        <ion-icon name="star-outline"></ion-icon>
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CommentCard2;
