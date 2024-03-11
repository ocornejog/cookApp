import React from "react";
import "../styles/CommentCard2.css";

const CommentCard2 = ({ name, date, starRating, comment }) => {

  const starValues = new Array(5).fill(false);

  return (
    <div className="comment-card">
      <div className="header">
        <div className="large-icon">
          <ion-icon name="person-circle"></ion-icon>
        </div>
        <span className="name">{name}</span>
        <span className="date">{date.toLocaleDateString()}</span>
      </div>
      <div className="stars2">
        {starValues.map((data, index) =>
          <div key={index} style={{cursor: 'pointer', marginRight: '10px'}}>
            <ion-icon name={(index >= starRating)? "star-outline" : "star"}></ion-icon>
          </div>
        )}
      </div>
      <p>{comment}</p>
    </div>
  );
};

export default CommentCard2;
