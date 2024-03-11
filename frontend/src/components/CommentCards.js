import React, { useState } from "react";
import "../style.css/CommentCards.css";

import ButtonComponent from "./ButtonComponent"; // Importez votre composant bouton ici

const CommentComponent = () => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePublish = () => {
    alert(`Commentaire publié: ${comment}`);
    setComment("");
  };

  return (
    <div className="comment-component">
      <div className="comment_flexbox">
        <h3 className="text-1">Évaluez votre expérience avec la recette</h3>
        <div class="stars">
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
          <ion-icon name="star-outline"></ion-icon>
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

export default CommentComponent;
