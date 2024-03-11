import React from "react";
import "../styles/recipeCard.css";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";

class RecipeCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isFavorited: false };
  }

  toggleFavorite = (event) => {
    event.stopPropagation(); // Pour empêcher le déclenchement de l'événement onClick du parent
    this.setState({ isFavorited: !this.state.isFavorited });
  };

  handleClick = () => {
    console.log("Le composant a été cliqué!");
  };

  render() {
    const { title, description } = this.props;
    const { isFavorited } = this.state;
    const image = process.env.PUBLIC_URL + "/Coquille.png";

    return (
      <div className="recipe-card" onClick={this.handleClick}>
        <button className="title-button">{title}</button>
        <img src={image} alt={title} />
        <p>
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
            style={{ opacity: isFavorited ? 1 : 0 }}
            color="#337D74"
          />
        </div>
      </div>
    );
  }
}

export default RecipeCard;
