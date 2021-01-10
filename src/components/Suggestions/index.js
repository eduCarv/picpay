import React, { useState } from "react";

import {
  Container,
  Option,
  Img,
  Label,
  HeaderTab,
  SuggestionsText,
  FavoritesText,
  SuggestionsTab,
  FavoritesTab,
  SuggestionsBox,
  FavoritesBox
} from "./styles";

import img1 from "../../images/01.png";
import img2 from "../../images/02.png";
import img3 from "../../images/03.png";
import img4 from "../../images/04.png";
import img5 from "../../images/05.png";
import img6 from "../../images/06.png";
import img7 from "../../images/07.png";

const suggestions = [
  {
    key: String(Math.random()),
    img: img4,
    label: "TV"
  },
  {
    key: String(Math.random()),
    img: img5,
    label: "Doações"
  },
  {
    key: String(Math.random()),
    img: img6,
    label: "Barras"
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "FAQ"
  },
  {
    key: String(Math.random()),
    img: img1,
    label: "Recarga"
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber"
  },
];

const favorites = [
  {
    key: String(Math.random()),
    img: img1,
    label: "Recarga"
  },
  {
    key: String(Math.random()),
    img: img2,
    label: "Uber"
  },
  {
    key: String(Math.random()),
    img: img7,
    label: "FAQ"
  }
];

export default function Suggestions() {
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showFavorites, setShowFavorites] = useState(false);

  function handleTabSuggestion() {
    setShowSuggestions(true);
    setShowFavorites(false);
  }

  function handleTabFavorite() {
    setShowSuggestions(false);
    setShowFavorites(true);
  }

  return (
    <>
      <HeaderTab>
        <SuggestionsBox
          onPress={handleTabSuggestion}
          style={
            showSuggestions
              ? { borderBottomWidth: 2 }
              : { borderBottomWidth: 0 }
          }
        >
          <SuggestionsText>Sugestões</SuggestionsText>
        </SuggestionsBox>

        <FavoritesBox
          onPress={handleTabFavorite}
          style={
            showFavorites ? { borderBottomWidth: 2 } : { borderBottomWidth: 0 }
          }
        >
          <FavoritesText>Favoritos</FavoritesText>
        </FavoritesBox>
      </HeaderTab>
      <Container>
        {showSuggestions ? (
          <SuggestionsTab>
            {suggestions.map(suggestion => (
              <Option key={suggestion.key}>
                <Img source={suggestion.img} />
                <Label>{suggestion.label}</Label>
              </Option>
            ))}
          </SuggestionsTab>
        ) : null}

        {showFavorites ? (
          <FavoritesTab>
            {favorites.map(favorite => (
              <Option key={favorite.key}>
                <Img source={favorite.img} />
                <Label>{favorite.label}</Label>
              </Option>
            ))}
          </FavoritesTab>
        ) : null}
      </Container>
    </>
  );
}
