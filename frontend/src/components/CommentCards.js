import React, { useState } from "react";
import "../styles/CommentCards.css";

import ButtonComponent from "./ButtonComponent"; // Importez votre composant bouton ici

export const CommentCard1 = (props) => {

  const starValues = new Array(5).fill(false);

  const [comment, setComment] = useState("");
  const [starRating, setStarRaiting] = useState(0);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePublish = () => {
    //alert(`Commentaire publié: ${comment}`);
    //setComment("");
    props.onSubmit(comment, starRating);
  };

  return (
    <div className="comment-component">
      <div className="comment_flexbox">
        <h3 className="text-1">Évaluez votre expérience avec la recette</h3>
        <div className="stars">
          {starValues.map((data, index) =>
            <div key={index} style={{cursor: 'pointer', marginRight: '10px'}} onClick={() => setStarRaiting(index + 1)}>
              <ion-icon name={(starRating <= index)? "star-outline" : "star"}></ion-icon>
            </div>
          )}
        </div>
        <h3 className="text-2">Laissez un commentaire</h3>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Comment"
        />

        <ButtonComponent
          type="primary"
          text="Publier"
          onClick={handlePublish}
        />
      </div>
    </div>
  );
};

//-------------------------------------------------------------------
// Default props for the component
CommentCard1.defaultProps = {
  onSubmit: (arg0, arg1) => {},
};
