import React from "react";
import "../styles/recipeCard.css";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
  }

  toggleFavorite = (event) => {
    event.stopPropagation(); // Pour empêcher le déclenchement de l'événement onClick du parent
    this.props.onClickFavorite();
  };

  handleClick = () => {
    console.log("Le composant a été cliqué!");
    this.props.onClick();
  };

  render() {
    const { title, description, favorite } = this.props;
    const image = process.env.PUBLIC_URL + "/Coquille.png";

    return (
      <div className="recipe-card" onClick={this.handleClick}>
        <button className="title-button">{title}</button>
        <img src={image} alt={title} />
        <p className="description-button">
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              <br />
            </span>
          ))}
        </p>
        <div className="heart-icon-container" onClick={this.toggleFavorite}>
          <IoMdHeartEmpty className="heart-icon" color="#337D74" />
          <IoMdHeart
            className="heart-icon"
            style={{ opacity: favorite ? 1 : 0 }}
            color="#337D74"
          />
        </div>
      </div>
    );
  }
}

export default RecipeCard;
