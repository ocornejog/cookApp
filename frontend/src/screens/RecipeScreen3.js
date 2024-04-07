import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import C from "../constants/colors";
import API from "../constants/Api";

import PreparationSteps from "../components/PreparationSteps";
import IngredientsList from "../components/IngredientsList";
import { CommentCard1 } from "../components/CommentCards";
import CommentCard2 from "../components/CommentCard2";

function RecipeScreen3() {
  const [photo, setPhoto] = useState(null);
  const { category, buttonText, title2 } = useParams();
  const [comment, setComment] = useState("");
  const [starRaiting, setStarRaiting] = useState(0);
  const [title, setTitle] = useState();
  const [stepList, setStepList] = useState([]);
  const [ingredientsList, setIngredientsList] = useState([]);
  const [commentsData, setCommentsData] = useState([]);

  const onSubmitComment = async (myComment, myStarRaiting) => {
    setComment(myComment);
    setStarRaiting(myStarRaiting);
  };

  useEffect(() => {
    fetch(`${API.APIuri}/api/recipe/${title2}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.name);
        setStepList(data.preparation_steps);
        setIngredientsList(data.ingredients);
        setPhoto(data.photo); // Ajoutez cette ligne
      })
      .catch((error) => console.error(error));
  }, [title2]);

  useEffect(() => {
    console.log(
      "My creative comment is:",
      comment,
      "and my raiting of this dish is:",
      starRaiting
    );
  }, [comment, starRaiting]);

  return (
    <div className="screen-view-1" style={{ backgroundColor: C.white }}>
      <div
        className="screen-view-1"
        style={{ width: "95%", backgroundColor: C.white }}
      >
        <div
          className="montserrat_700"
          style={{
            fontSize: "11px",
            color: C.grey,
            textAlign: "left",
            width: "100%",
          }}
        >
          {`${category} > ${buttonText} > ${title2}`}
        </div>
        <div
          className="montserrat_700"
          style={{
            fontSize: "28px",
            color: C.black,
            textAlign: "center",
            width: "100%",
            textDecoration: "underline",
            marginTop: "24px",
          }}
        >
          {`${title2}`}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "49% 2% 49%",
            width: "100%",
            marginTop: "24px",
          }}
        >
          <div
            style={{
              gridColumn: "1 / 2",
              display: "flex",
              alignItems: "flex-start",
              marginTop: "24px",
              paddingRight: "32px",
            }}
          >
            <PreparationSteps stepList={stepList} />
          </div>
          <div
            style={{
              gridColumn: "2 / 3",
              backgroundColor: C.brown,
              height: "90%",
            }}
          ></div>
          <div
            style={{
              gridColumn: "3 / 4",
              display: "flex",
              alignItems: "flex-start",
              marginTop: "24px",
              paddingLeft: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "row", width: "100%" }}
              >
                <div style={{ width: "50%" }}>
                  <IngredientsList ingredientsList={ingredientsList} />
                </div>
                <div
                  style={{
                    width: "50%",
                    marginLeft: "8px",
                    alignSelf: "center",
                  }}
                >
                  <img
                    style={{ width: "90%", height: "auto", objectFit: "cover" }}
                    src={photo}
                    alt={title}
                  />
                </div>
              </div>
              <div
                style={{ width: "50%", alignSelf: "center", marginTop: "16px" }}
              >
                <CommentCard1
                  onSubmit={(comment, starRaiting) =>
                    onSubmitComment(comment, starRaiting)
                  }
                />
              </div>
              <div
                className="montserrat_700"
                style={{
                  fontSize: "20px",
                  color: C.green,
                  textAlign: "left",
                  marginTop: "16px",
                  width: "100%",
                }}
              >
                {`Commentaires`}
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "16px",
                  marginBottom: "16px",
                  width: "100%",
                }}
              >
                {commentsData.map((item, index) => (
                  <div key={index} style={{ width: "311px" }}>
                    <CommentCard2
                      name={item.name}
                      date={item.date}
                      comment={item.comment}
                      starRating={item.starRaiting}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeScreen3;
