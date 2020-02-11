import React from 'react';
import Styled from 'styled-components/native';
import StarRating from 'react-native-star-rating';
import StarFilled from '../../../assets/images/polling/star_filled.png';
import StarUnFilled from '../../../assets/images/polling/star_unfilled.png';

const Container = Styled.View`
  margin-top: 15px;
`;

const RatingText = Styled.Text`
  color: ${props => props.theme.color.black};
  font-size: 16px;
  font-family: ${props => props.theme.fontFamilies.latoRegular};
  font-weight: normal;
  margin-bottom: 30px;
`;

function RatingComponents() {
  const [starCount, setStarCount] = React.useState(0);
  const ratingCompleted = () => {};

  function onStarRatingPress(rating) {
    setStarCount(rating);
  }

  return (
    <Container>
      <RatingText>Give your rating</RatingText>
      <StarRating
        disabled={false}
        maxStars={5}
        emptyStar={StarUnFilled}
        fullStar={StarFilled}
        rating={starCount}
        halfStarEnabled={false}
        selectedStar={rating => onStarRatingPress(rating)}
      />
    </Container>
  );
}

export default RatingComponents;
